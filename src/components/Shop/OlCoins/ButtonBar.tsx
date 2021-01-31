import React, { FC, useContext } from "react";
import styled from "styled-components";
import Button from "atoms/Button";
import { StateContext } from "state/state";
import { changeOlCoins } from "state/actions";

type ButtonBarProps = {
  signValue: number;
};

const ButtonStyle = {
  marginRight: "10px",
  width: "20%",
};

const ButtonBar: FC<ButtonBarProps> = ({ signValue }: ButtonBarProps) => {
  const { state, dispatch } = useContext(StateContext);
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
  return <div> {ButtonBarComponent} </div>;
};

export default styled(ButtonBar)`
  ButtonBarComponent {
  }
`;
