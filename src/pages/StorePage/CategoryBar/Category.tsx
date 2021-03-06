import React, { useContext, FC } from "react";
import styled from "styled-components";
import { OnlineBlue, OnlineOrange } from "utility/style";
import { StateContext } from "state/state";
import { setCategory } from "state/actions";

type CategoryButtonProps = {
  category: string;
};

const Category: FC<CategoryButtonProps> = ({
  category,
}: CategoryButtonProps) => {
  const { state, dispatch } = useContext(StateContext);
  const onClick = () => dispatch(setCategory(category));

  return (
    <Button
      style={{
        backgroundColor: category == state.category ? OnlineOrange : OnlineBlue,
      }}
      onClick={onClick}
    >
      {category}
    </Button>
  );
};

export default Category;

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 2px;
  margin: 4px;
  width: 10%;
  height: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :active {
    background-color: ${OnlineOrange};
  }

  :focus {
    outline: none;
  }
`;
