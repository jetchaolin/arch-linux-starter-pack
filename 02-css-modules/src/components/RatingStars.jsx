import { useState, useEffect } from "react";

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
    <span id={starId}>
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
    </span>
  );
}
