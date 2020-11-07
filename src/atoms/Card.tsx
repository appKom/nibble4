import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { OnlineOrange } from "utility/style";

interface Props {
  children: ReactNode;
}

const Card: FC<Props> = ({ children }: Props) => (
  <Container>{children}</Container>
);

const Container = styled.div`
  border-top: 15px solid ${OnlineOrange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: #ffffff;
`;

export default Card;
