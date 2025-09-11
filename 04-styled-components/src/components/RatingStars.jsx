import { useState, useEffect } from "react";
import styled from "styled-components";

const Stars = styled.span`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  color: white;
`;

export default function RatingStar({
  childrenRating,
  starId,
  cardId,
  starMemory,
}) {
  const [starRating, setStarRating] = useState(starMemory || null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setStarRating(starMemory);
  }, [starMemory, starRating]);

  const handleClick = (rating, id) => {
    setStarRating(rating);
    childrenRating(id, rating);
  };

  return (
    <Stars id={starId}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label htmlFor={`${index + 1}-star`} key={index}>
            <input
              type="radio"
              name="rating"
              id={`${index + 1}-star`}
              value={ratingValue}
            />
            <i
              key={index}
              id={`${index + 1}-star`}
              onClick={() => handleClick(ratingValue, cardId)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              className={
                ratingValue <= (hover || starRating)
                  ? `fa-solid fa-star`
                  : `fa-regular fa-star`
              }
            ></i>
          </label>
        );
      })}
    </Stars>
  );
}
