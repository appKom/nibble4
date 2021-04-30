import React, { useContext, FC } from "react";
import styled from "styled-components";
import Category from "./Category";
import { StateContext } from "state/state";
import { getCategories } from "types/inventory";

const CategoryBar: FC = () => {
  const { state } = useContext(StateContext);
  const categories = getCategories(state.inventory);

  return (
    <Container>
      {categories.map((category) => (
        <Category key={category} category={category} />
      ))}
    </Container>
  );
};

export default CategoryBar;

const Container = styled.div`
  display: flex;
  margin-left: 25px;
  height: 30px;
`;