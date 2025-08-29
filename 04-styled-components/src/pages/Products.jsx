import styled from "styled-components";
import Card from "../components/Card.jsx";
import archlinux from "../assets/archlinux.avif";

const Container = styled.div`
  margin: 5rem auto;
  max-width: 80%;
  max-height: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr;
  gap: 2rem;
`;

function Products() {
  function multiplyCards(number) {
    const products = [
      "ArchLinux",
      "Hyprland",
      "Kitty",
      "LazyVim",
      "Firefox",
      "Typora",
      "Btop++",
      "Docker",
    ];

    const imgs = [archlinux];

    let cardsList = [];
    for (let i = 0; i < number; i++) {
      let card = (
        <Card
          childrensTitle={products[i]}
          childrensImage={
            imgs[i] ||
            "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      );
      cardsList.push(card);
    }
    return cardsList;
  }
  return <Container>{multiplyCards(8).map((card) => card)}</Container>;
}

export default Products;
