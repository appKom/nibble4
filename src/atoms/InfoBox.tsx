import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { OffWhite, OnlineBlue } from "utility/style";

type Props = {
  children: ReactNode;
};

const InfoBox: FC<Props> = ({ children }: Props) => (
  <Container>
    <p>{children}</p>
  </Container>
);

const Container = styled.div`
  background-color: ${OffWhite};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;

  span {
    color: ${OnlineBlue};
    text-decoration: underline;
  }
`;

export default InfoBox;
