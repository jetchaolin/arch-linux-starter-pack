import styled from "styled-components";

import { useState, useEffect } from "react";
import { getCart } from "../hooks/cart.js";
import { lightTheme, darkTheme } from "../hooks/themes.js";
import { useTheme } from "../context/ThemeContext";
import { removeItem, clearCart } from "../hooks/cart.js";

import Button from "../components/Button.jsx";

export default function CartPage() {
  let { theme } = useTheme();
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const currentCart = getCart();
    if (JSON.stringify(products) !== JSON.stringify(currentCart)) {
      setProducts(currentCart);
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

  const Subtitle = styled.h2`
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1rem;
  `;
  const List = styled.ul`
    padding: 0;
    margin-bottom: 6rem;
    list-style: none;
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    max-height: 600px;
    overflow-y: auto;
    align-items: center;
  `;
  const ListItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.5rem;
    gap: 1rem;
  `;

  const Img = styled.img`
    display: block;
    border: 0.1rem solid
      ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    border-radius: 0.8rem;
    margin: 0 1rem 2rem 1rem;
    width: 150px;
    height: 95px;
    object-fit: cover;
    object-position: center;
  `;

  const Span = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  `;
  const ButtonSpan = styled.span`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  `;

  const BigButtons = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  `;

  const handleRemoveFromCart = (index) => {
    removeItem(index);
    setProducts(getCart());
  };

  const handleClearCart = () => {
    clearCart();
    setProducts(getCart());
  };

  const handleOpenApp = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOpenAll = (apps) => {
    apps.forEach((app, index) => {
      setTimeout(() => {
        window.open(app[3], "_blank", "noopener,noreferrer");
      }, index * 800);
    });
  };

  return (
    <>
      <Container>
        <Title>Lista de Apps</Title>
        {products.length === 0 ? (
          <p>Your directory is empty.</p>
        ) : (
          <List>
            {products.map((product, index) => (
              <ListItem key={index} className={`Container-${index}`}>
                <Span>
                  <Subtitle id={`title-${products[0]}`}>
                    {product[0] || products}
                  </Subtitle>
                  <Img src={product[2]} alt={`img-${product[0]}`} />
                </Span>
                <ButtonSpan>
                  <Button
                    buttonWidth={85}
                    buttonHeight={35}
                    fontSize={0.8}
                    childrenOnClick={() => handleOpenApp(product[3])}
                  >
                    Ir ao Site
                  </Button>
                  <Button
                    buttonWidth={85}
                    buttonHeight={35}
                    fontSize={0.8}
                    childrenOnClick={() => handleRemoveFromCart(index)}
                  >
                    Remover
                  </Button>
                </ButtonSpan>
              </ListItem>
            ))}
          </List>
        )}
        {products.length === 0 ? null : (
          <>
            <BigButtons>
              <Button
                childrensId="openAll"
                childrenOnClick={() => handleOpenAll(products)}
              >
                Abrir Todos
              </Button>
              <Button childrensId="clearCart" childrenOnClick={handleClearCart}>
                Limpar Lista
              </Button>
            </BigButtons>
          </>
        )}
      </Container>
    </>
  );
}
