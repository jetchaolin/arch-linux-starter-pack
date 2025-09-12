import Card from "../components/Card.jsx";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

import archlinux from "../assets/archlinux.avif";
import hyprland from "../assets/install-hyprland-in-linux-1.png";
import kitty from "../assets/kitty-042-traz-terminal-quick-access-ao-estilo-quake-e-melhorias-no-unicode.webp";
import lazyvim from "../assets/7fc50ada-aecc-4ba7-99a9-18c3d31fcf6f.png";
import firefox from "../assets/FX_Design_Blog_Header_1400x770.jpg";
import typora from "../assets/original-80eab67624174e2bb2d5ed958ffaa1e3.webp";
import btop from "../assets/btop.avif";
import discord from "../assets/discord-reproducao.webp";

const imgs = [
  archlinux,
  hyprland,
  kitty,
  lazyvim,
  firefox,
  typora,
  btop,
  discord,
];

const products = [
  ["ArchLinux", "1.3GB", imgs[0], "https://archlinux.org/download/", false],
  [
    "Hyprland",
    "3.5MB",
    imgs[1],
    "https://wiki.hypr.land/Getting-Started/Installation/",
    false,
  ],
  ["Kitty", "6MB", imgs[2], "https://sw.kovidgoyal.net/kitty/binary/", false],
  ["LazyVim", "450KB", imgs[3], "https://www.lazyvim.org/installation", false],
  [
    "Firefox",
    "65MB",
    imgs[4],
    "https://wiki.archlinux.org/title/Firefox",
    false,
  ],
  [
    "Typora",
    "75MB",
    imgs[5],
    "https://support.typora.io/Typora-on-Linux/",
    false,
  ],
  ["Btop++", "2MB", imgs[6], "https://github.com/aristocratos/btop", false],
  ["Discord", "45MB", imgs[7], "https://discord.com/", true],
];

export default function Products({ updateCart }) {
  function multiplyCards(number) {
    let cardsList = [];
    for (let i = 0; i < number; i++) {
      let card = (
        <Card
          key={i}
          cardData={{
            id: i + 1,
            title: products[i],
            image:
              imgs[i] ||
              "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          value={products.length}
          disabled={products[i][4]}
          updateCart={updateCart}
        />
      );
      cardsList.push(card);
    }
    return cardsList;
  }
  return (
    <div
      id="products"
      class="bg-[var(--background-color)] my-4 mx-auto max-w-[80%] h-[82%] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-rows-[2fr] gap-8"
    >
      {multiplyCards(products.length).map((card) => card)}
    </div>
  );
}
