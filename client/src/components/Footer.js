import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  color: white;
`;

const HrBar = styled.hr`
  margin: 0;
  border: 0.3px solid black;
  opacity: 0.1;
`;

const Footer = () => {
  return (
    <>
      <HrBar />
      <Container>
        <div style={{ color: "white" }}>© 2013–2020 Noisli Ltd</div>
        <Links>
          <Link>Item 1</Link>
          <Link>Item 2</Link>
          <Link>Item 3</Link>
        </Links>
      </Container>
    </>
  );
};

export default Footer;
