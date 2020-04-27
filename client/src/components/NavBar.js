import React from "react";
import styled from "styled-components";
import { ThemePicker } from "./ThemePicker";

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HrBar = styled.hr`
  margin: 0;
  border: 0.3px solid black;
  opacity: 0.1;
`;

const H1Nav = styled.h1`
  margin: 0;
  color: white;
`;

const NavBar = ({ theme, setTheme }) => {
  return (
    <StickyWrapper style={{ backgroundColor: theme }}>
      <Content>
        <H1Nav>Noisli-mimic</H1Nav>
        <ThemePicker setTheme={setTheme}></ThemePicker>
        <H1Nav>Settings to be added</H1Nav>
      </Content>
      <HrBar />
    </StickyWrapper>
  );
};

export default NavBar;
