import React, { FC, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export enum ButtonColors {
  PRIMARY = "#0D5474",
  SECONDARY = "#F9B759",
  RED = "#ED3E18",
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

const Container = styled.button<{ buttonColor: ButtonColors }>`
  background-color: ${(props) => props.buttonColor};
  padding: 0.2rem 1rem;
  font-size: 26px;
  color: white;
  border: none;
  border-radius: 3px;

  margin-left: auto;
  margin-right: auto;
`;

export default Button;
