import React, { useContext, FC } from "react";
import styled from "styled-components";
import { OnlineBlue, OnlineOrange } from "utility/style";
import { StateContext } from "state/state";
import { setCategory } from "state/actions";
type CategoryButtonProps = {
  category: string;
};

const CategoryButton: FC<CategoryButtonProps> = ({
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

export default CategoryButton;

const Button = styled.button`
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
