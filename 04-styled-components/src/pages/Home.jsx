import styled from "styled-components";

const Title = styled.h1`
  color: #d7e144;
  font-family: "Arial", sans-serif;
  font-size: 8.5rem;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: #192647;
`;

function Home() {
  return (
    <Wrapper>
      <Title>MINI LOJA</Title>
    </Wrapper>
  );
}

export default Home;
