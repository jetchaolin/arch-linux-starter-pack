import styled from "styled-components";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../hooks/themes.js";
import { addToCart } from "../hooks/cart.js";
import { addToStars, getStars } from "../hooks/rating.js";

import Button from "./Button.jsx";
import RatingStar from "./RatingStars.jsx";

import Stack from "@mui/material/Stack";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Container = styled.div`
  max-width: 500px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover Img {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  }

  &:hover h1 {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const Bottom = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const P = styled.p`
  color: white;
`;

export default function Card({ cardData, value, disabled }) {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const [rating, setRating] = useState(
    getStars().length === 0 ? Array(value).fill(0) : getStars(),
  );

  const Title = styled.h1`
    font-size: 2rem;
    color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    margin: 0.8rem 0 0.8rem 0;
  `;

  const Img = styled.img`
    display: block;
    border: 0.1rem solid
      ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    border-radius: 0.8rem;
    margin: 0 1rem 2rem 1rem;
    width: 300px;
    height: 170px;
    object-fit: cover;
    object-position: center;
  `;

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
      <Container
        id={`card-id-${cardData.id}`}
        className={`card-${cardData.title}`}
      >
        {!loading ? (
          <Title
            id={`title-id-${cardData.id}`}
            className={`title-${cardData.title[0]}`}
          >
            {cardData.title[0]}
          </Title>
        ) : (
          <Skeleton animation="wave" height={40} width={240} borderRadius={6} />
        )}
        {!loading ? (
          <Img src={cardData.image} alt={`img-${cardData.title[0]}`} loading="lazy" />
        ) : (
          <Skeleton animation="wave" height={170} width={300} borderRadius={16} />
        )}
        <Bottom
          id={`container-bottom-${cardData.id}`}
          className="container-bottom"
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
            <P id={`size-id-${cardData.id}`}>
              Preço: {cardData.title[1]} de armazenamento
            </P>
          ) : (
            <Skeleton animation="wave" height={20} width={240} borderRadius={6} />
          )}
        </Bottom>
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
      </Container>
    </>
  );
}
