import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

import panels from "../assets/index";
import Panel from "../components/Panel";
import TabBar from "../components/TabBar";

export const PanelsActiveContext = React.createContext();
export const SetPanelsActiveContext = React.createContext();

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 860px;
  padding: 20px;
  box-sizing: border-box;
`;

const PlayList = () => {
  const [panelsActive, setPanelsActive] = useState([]);

  const renderPanels = () => {
    return panels.map((panel) => (
      <Col span={12} key={panel.id}>
        <Panel id={panel.id} image={panel.image} audio={panel.audio}></Panel>
      </Col>
    ));
  };

  return (
    <PanelsActiveContext.Provider value={panelsActive}>
      <SetPanelsActiveContext.Provider value={setPanelsActive}>
        <TabBar></TabBar>

        <Container>
          <Row gutter={[16, 48]}>{renderPanels()}</Row>
        </Container>
      </SetPanelsActiveContext.Provider>
    </PanelsActiveContext.Provider>
  );
};

export default PlayList;
