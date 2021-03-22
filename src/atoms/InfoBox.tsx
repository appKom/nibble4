import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { OffWhite, OnlineBlue, WarningOrange } from "utility/style";

export enum InfoBoxTypes {
  DEFAULT = "DEFAULT",
  WARNING = "WARNING",
}

type Props = {
  children: ReactNode;
  type?: InfoBoxTypes;
};

const InfoBox: FC<Props> = ({
  children,
  type = InfoBoxTypes.DEFAULT,
}: Props) => (
  <Container typeColor={type}>
    <p>{children}</p>
  </Container>
);

const Container = styled.div<{ typeColor: InfoBoxTypes }>`
  background-color: ${(props) =>
    props.typeColor === InfoBoxTypes.DEFAULT ? OffWhite : WarningOrange};
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;

  span {
    color: ${OnlineBlue};
    text-decoration: underline;
  }
`;

export default InfoBox;
