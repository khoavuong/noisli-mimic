import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { SetPanelsActiveContext } from "../pages/PlayList";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Productivity = [0, 1, 2];
const Relax = [3, 4, 5];

export const Combos = () => {
  const setPanelsActive = useContext(SetPanelsActiveContext);

  return (
    <Container>
      <Button
        shape="round"
        className="combo-button"
        onClick={() => setPanelsActive(Productivity)}
      >
        Productivity
      </Button>
      <Button
        shape="round"
        className="combo-button"
        onClick={() => setPanelsActive(Relax)}
      >
        Relax
      </Button>
    </Container>
  );
};
