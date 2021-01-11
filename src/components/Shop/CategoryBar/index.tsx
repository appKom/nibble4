import React, { useContext, FC } from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";
import { StateContext } from "state/state";
import { getCategories } from "types/inventory";

const CategoryBar: FC = () => {
  const { state } = useContext(StateContext);

  const categories = getCategories(state.inventory);

  const CategoryBar = categories.map((category) => (
    <CategoryButton key={category} category={category} />
  ));

  return <Container> {CategoryBar} </Container>;
};

export default CategoryBar;

const Container = styled.div`
  display: flex;
  margin-left: 25px;
`;
