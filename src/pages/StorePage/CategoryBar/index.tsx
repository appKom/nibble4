import React, { useContext, FC } from "react";
import styled from "styled-components";
import Category from "./Category";
import { StateContext } from "state/state";
import { favouritesCategory, getCategories } from "types/inventory";
import { setCategory } from "state/actions";

const CategoryBar: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const categories = getCategories(state.inventory, state.user!);

  // If the logged in user has a substantial amount of products previously purchased,
  // automatically set the category to "Dine favoritter".
  if (state.user!.favourites.length >= 4)
    dispatch(setCategory(favouritesCategory));

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
