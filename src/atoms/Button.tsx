import React, { FC, ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { ErrorRed, OnlineBlue, OnlineOrange } from "utility/style";

export enum ButtonColors {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  RED = "RED",
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonColor?: ButtonColors;
};

const Button: FC<Props> = ({
  buttonColor = ButtonColors.PRIMARY,
  children,
  ...rest
}: Props) => {
  return (
    <Container {...rest} buttonColor={buttonColor}>
      {children}
    </Container>
  );
};

const getColor = (color: ButtonColors): string => {
  switch (color) {
    case ButtonColors.PRIMARY:
      return OnlineBlue;
    case ButtonColors.SECONDARY:
      return OnlineOrange;
    case ButtonColors.RED:
      return ErrorRed;
    default:
      return OnlineBlue;
  }
};

const Container = styled.button<{ buttonColor: ButtonColors }>`
  background-color: ${(props) => getColor(props.buttonColor)};
  padding: 0.2rem 1rem;
  font-size: 26px;
  color: white;
  border: none;
  border-radius: 3px;
`;

export default Button;
