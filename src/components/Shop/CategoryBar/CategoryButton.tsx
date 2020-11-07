import React, { FC } from "react";
import styled from "styled-components";
import { OnlineBlue, OnlineOrange } from "style";

type CategoryButtonProps = {
  text: string;
};

const CategoryButton: FC<CategoryButtonProps> = ({
  text,
}: CategoryButtonProps) => {
  return <Button> {text} </Button>;
};

export default CategoryButton;

const Button = styled.button`
  background-color: ${OnlineBlue};
  color: white;
  border: none;
  border-radius: 2px;
  margin: 4px;
  width: 6%;
  height: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :active {
    background-color: ${OnlineOrange};
  }

  :focus {
    outline: none;
  }
`;
