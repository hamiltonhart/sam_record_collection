import styled from "styled-components";

export const PrimaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 4.2rem 1rem;
  border-radius: var(--radius);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `none`};
`;
