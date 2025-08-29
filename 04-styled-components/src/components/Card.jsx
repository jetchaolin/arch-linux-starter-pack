import styled from "styled-components";
import Button from "./Button.jsx";

const Container = styled.div`
  max-width: 500px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover Img {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #d7e144;
`;

const Img = styled.img`
  border: 0.1rem solid #d7e144;
  border-radius: 0.8rem;
  margin: 0 1rem 2rem 1rem;
  max-width: 300px;
  max-height: 500px;
`;

function Card({ childrensTitle, childrensImage }) {
  return (
    <>
      <Container className={`card-${childrensTitle}`}>
        <Title>{childrensTitle}</Title>
        <Img src={childrensImage} alt={`img-${childrensTitle}`} />
        <Button>Add to Cart</Button>
      </Container>
    </>
  );
}

export default Card;
