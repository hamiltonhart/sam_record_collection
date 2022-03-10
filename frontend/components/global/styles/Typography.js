import styled from "styled-components";

export const CardHeading = styled.h3`
  font-size: var(--g);
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => (props.color ? props.color : "var(--white")};
  -webkit-text-stroke: 1px
    ${(props) => (props.color ? props.color : "var(--white")};
`;
