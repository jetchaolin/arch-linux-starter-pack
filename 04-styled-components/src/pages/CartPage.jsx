import styled from "styled-components";
import { useState, useEffect } from "react";
import { getCart } from "../hooks/cart.js";
import { lightTheme, darkTheme } from "../hooks/themes.js";
import { useTheme } from "../context/ThemeContext";

function CartPage() {
  let { theme } = useTheme();
  let [products, setProducts] = useState([]);

  useEffect(() => {
    if (products != getCart()) {
      setProducts(getCart());
    }
  }, [products]);

  const Container = styled.div`
    min-height: 800px;
    margin: 0;
    padding: 2rem;
    background: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
    color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
  `;
  const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  `;
  const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ListItem = styled.li`
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
  `;

  return (
    <Container>
      <Title>Apps</Title>
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <List>
          {products.map((product, index) => (
            <ListItem key={index}>{product}</ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default CartPage;
