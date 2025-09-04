import styled from "styled-components";
import Button from "./Button.jsx";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../hooks/themes.js";
import { addToCart, getCart } from "../hooks/cart.js";

function Card({ cardData }) {
  const { theme } = useTheme();
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

  const Bottom = styled.span`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  `;

  const Stars = styled.span`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    color: white;
  `;

  const P = styled.p`
    color: white;
  `;

  const handleAddToCart = (app) => {
    addToCart(app);
    console.log(getCart());
  };

  return (
    <>
      <Container
        id={`card-id-${cardData.id}`}
        className={`card-${cardData.title}`}
      >
        <Title
          id={`title-id-${cardData.id}`}
          className={`title-${cardData.title[0]}`}
        >
          {cardData.title[0]}
        </Title>
        <Img src={cardData.image} alt={`img-${cardData.title}`} />
        <Bottom
          id={`container-bottom-${cardData.id}`}
          className="container-bottom"
        >
          <Button
            childrensId={cardData.id}
            className={`btn-${cardData.title[0]}`}
            childrenOnClick={() => handleAddToCart(cardData.title[0])}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </Button>
          <P id={`size-id-${cardData.id}`}>Size: {cardData.title[1]}</P>
        </Bottom>
        <Stars
          id={`stars-id-${cardData.id}`}
          className={`stars-${cardData.title}`}
        >
          <i id={`1-star`} className="fa-regular fa-star"></i>
          <i id={`2-star`} className="fa-regular fa-star"></i>
          <i id={`3-star`} className="fa-regular fa-star"></i>
          <i id={`4-star`} className="fa-regular fa-star"></i>
          <i id={`5-star`} className="fa-regular fa-star"></i>
        </Stars>
      </Container>
    </>
  );
}

export default Card;
