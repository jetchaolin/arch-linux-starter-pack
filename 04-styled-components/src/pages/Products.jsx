import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { lightTheme, darkTheme } from "../hooks/themes.js";
import Card from "../components/Card.jsx";

import archlinux from "../assets/archlinux.avif";
import hyprland from "../assets/install-hyprland-in-linux-1.png";
import kitty from "../assets/kitty-042-traz-terminal-quick-access-ao-estilo-quake-e-melhorias-no-unicode.webp";
import lazyvim from "../assets/7fc50ada-aecc-4ba7-99a9-18c3d31fcf6f.png";
import firefox from "../assets/FX_Design_Blog_Header_1400x770.jpg";
import typora from "../assets/original-80eab67624174e2bb2d5ed958ffaa1e3.webp";
import btop from "../assets/btop.avif";
import docker from "../assets/21.-Docker-101.png";

function Products() {
  const { theme } = useTheme();

  const Container = styled.div`
    background: ${theme == "light"
      ? lightTheme.background
      : darkTheme.background};
    margin: 1rem auto 1rem auto;
    max-width: 80%;
    height: 82%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: 2fr;

    gap: 2rem;
  `;

  const products = [
    ["ArchLinux", "1.3GB", "https://archlinux.org/download/"],
    [
      "Hyprland",
      "3.5MB",
      "https://wiki.hypr.land/Getting-Started/Installation/",
    ],
    ["Kitty", "6MB", "https://sw.kovidgoyal.net/kitty/binary/"],
    ["LazyVim", "450KB", "https://www.lazyvim.org/installation"],
    ["Firefox", "65MB", "https://wiki.archlinux.org/title/Firefox"],
    ["Typora", "75MB", "https://support.typora.io/Typora-on-Linux/"],
    ["Btop++", "2MB", "https://github.com/aristocratos/btop"],
    ["Docker", "45MB", "https://wiki.archlinux.org/title/Docker"],
  ];
  function multiplyCards(number) {
    const imgs = [
      archlinux,
      hyprland,
      kitty,
      lazyvim,
      firefox,
      typora,
      btop,
      docker,
    ];

    let cardsList = [];
    for (let i = 0; i < number; i++) {
      let card = (
        <Card
          cardData={{
            id: i + 1,
            title: products[i],
            image:
              imgs[i] ||
              "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          key={i}
        />
      );
      cardsList.push(card);
    }
    return cardsList;
  }
  return (
    <Container>{multiplyCards(products.length).map((card) => card)}</Container>
  );
}

export default Products;
