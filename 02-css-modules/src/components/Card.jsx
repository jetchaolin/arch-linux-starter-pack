import { useState, useEffect } from "react";
import { addToCart } from "../hooks/cart.js";
import { addToStars, getStars } from "../hooks/rating.js";

import Button from "./Button.jsx";
import RatingStar from "./RatingStars.jsx";
import Stack from "@mui/material/Stack";
import CardStyle from "./Card.module.css";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";


export default function Card({ cardData, value, disabled }) {
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(
    getStars().length === 0 ? Array(value).fill(0) : getStars(),
  );

  useEffect(() => {
    const handleAction = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };
    handleAction();
  }, []);

  const handleAddToCart = (app) => {
    addToCart(app);
  };

  const handleRating = (cardId, ratedChild = null) => {
    let newRating = rating.slice();
    newRating[cardId - 1] = ratedChild;
    if (rating[cardId - 1] === newRating[cardId - 1]) {
      newRating[cardId - 1] = 0;
    }
    setRating(newRating);
    addToStars(cardId - 1, ratedChild);
  };

  return (
    <>
      <div
        id={CardStyle.container}
        className={`card-${cardData.title}`}
      >
        {!loading ? (
          <h1
            id={`title-id-${cardData.id}`}
            className={`title-${cardData.title[0]}`}
          >
            {cardData.title[0]}
          </h1>
        ) : (
          <Skeleton animation="wave" height={40} width={240} borderRadius={6} />
        )}
        {!loading ? (
          <img src={cardData.image} alt={`img-${cardData.title[0]}`} loading="lazy" />
        ) : (
          <Skeleton animation="wave" height={170} width={300} borderRadius={16} />
        )}
        <span
          id={`container-bottom-${cardData.id}`}
          className={CardStyle.bottomContainer}
        >
          {!loading ? (
            <Button
              childrensId={cardData.id}
              className={`btn-${cardData.title[0]}`}
              childrenOnClick={() => handleAddToCart(cardData.title)}
              disabled={disabled}
            >
              <i className="fa-solid fa-cart-plus"></i>
            </Button>
          ) : (
            <Skeleton animation="wave" height={50} width={50} borderRadius={6} />
          )}
          {!loading ? (
            <p id={`size-id-${cardData.id}`}>
              Preço: {cardData.title[1]} de armazenamento
            </p>
          ) : (
            <Skeleton animation="wave" height={20} width={240} borderRadius={6} />
          )}
        </span>
        {!loading ? (
          <RatingStar
            starMemory={rating[cardData.id - 1]}
            cardId={cardData.id}
            childrenRating={handleRating}
            starId={`star-span-id-${cardData.id}`}
          />
        ) : (
          <Skeleton animation="wave" height={20} width={140} borderRadius={6} />
        )}
      </div>
    </>
  );
}
