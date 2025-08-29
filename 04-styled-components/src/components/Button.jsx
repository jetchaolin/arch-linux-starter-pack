import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--background-color);
  color: var(--primary-color);
  border: solid 0.1rem var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
    border: solid 0.1rem var(--secondary-color);
  }

  &:active {
    background-color: #aebf2e;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
