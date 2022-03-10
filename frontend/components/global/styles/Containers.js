import styled from "styled-components";

export const PrimaryContainer = styled.div`
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  display: flex;
  flex-direction: column;
  min-width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4.2rem 1rem;
  border-radius: var(--radius);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `var(--black)`};
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
