import React, { FC, useContext } from "react";
import styled from "styled-components";
import Button from "atoms/Button";
import { StateContext } from "state/state";
import { changeOlCoins } from "state/actions";

type ButtonBarProps = {
  signValue: number;
};

const ButtonStyle = {
  width: "100%",
  margin: "3px",
};

const ButtonBar: FC<ButtonBarProps> = ({ signValue }: ButtonBarProps) => {
  const { dispatch } = useContext(StateContext);
  const values = [1, 5, 10, 100];

  const ButtonBarComponent = values.map((value) => (
    <Button
      key={value}
      value={signValue ? value : value * -1}
      style={ButtonStyle}
      onClick={() => dispatch(changeOlCoins(signValue ? value : value * -1))}
    >
      {signValue ? value : value * -1}
    </Button>
  ));
  return <Container> {ButtonBarComponent} </Container>;
};

export default styled(ButtonBar)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;
