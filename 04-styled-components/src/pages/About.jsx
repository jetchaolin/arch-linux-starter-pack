import styled from "styled-components";
import { lightTheme, darkTheme } from "../hooks/themes.js";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem auto 1rem auto;
    padding: 1rem;
    max-width: 80%;
    height: 700px;
  `;
  const AboutTitle = styled.h1`
    color: ${theme == "light" ? lightTheme.primary : darkTheme.primary};
    font-size: 3rem;
    text-align: left;
    margin: 0;
  `;
  const AboutText = styled.p`
    text-align: left;
    font-size: 1.2rem;
  `;
  return (
    <>
      <AboutContainer>
        <AboutTitle>Sobre ALSP</AboutTitle>
        <AboutText>
          Esta aplicação, desenvolvida como parte de uma atividade acadêmica,
          explora a personalização de um sistema operacional com diferentes
          tecnologias, mas vai além do simples objetivo de uma "mini loja". Ela
          foi concebida como uma vitrine digital, não para vender produtos, mas
          para apresentar uma filosofia.
        </AboutText>
        <AboutText>
          Neste projeto, o conceito de consumo foi adaptado em uma experiência
          de descoberta. Cada "card de produto" não é um item a ser comprado,
          mas sim uma ferramenta gratuita que pode vir a compor a jornada de um
          usuário de Windows rumo à introdução de seu próprio sistema como um
          espelho da sua personalidade, não só na aparencia mas também na
          funcionalidade.
        </AboutText>
        <AboutText>
          O que se vende na maioria em outros sistemas é a conveniência como
          solução para problemas gerados na intenção de se obter lucro. O que
          esta aplicação apresenta é a recompensa de longo prazo do trabalho
          duro e esforço para aprender a personalizar e de se obter o controle
          total do sistema e suas aplicações. O botão "Adicionar ao Carrinho" se
          transforma em uma ação de "Conhecer o novo", convidando o usuário a
          explorar um mundo onde a verdadeira satisfação não vem da compra, mas
          do conhecimento.
        </AboutText>
        <AboutText>
          Esta aplicação é um convite para desconstruir o conformismo e te tirar
          da zona de confoto. Se assim como eu você é dev, seja você mesmo o
          dono do seu sistema operacional (de verdade).
        </AboutText>
      </AboutContainer>
    </>
  );
}
