import React, { FC } from "react";
import styled from "styled-components";
import CategoryButton from "./CategoryButton";

const CategoryBar: FC = () => {
  return (
    <Container>
      <CategoryButton text="Annet" />
      <CategoryButton text="Drikke" />
      <CategoryButton text="Mat" />
      <CategoryButton text="Snacks" />
      <CategoryButton text="Øl" />
    </Container>
  );
};

export default CategoryBar;

const Container = styled.div`
  display: flex;
  margin-left: 25px;
`;
