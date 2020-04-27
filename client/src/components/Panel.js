import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Slider } from "antd";
import { SetPanelsActiveContext, PanelsActiveContext } from "../pages/PlayList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  transition: all 0.5s;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(58deg)
    brightness(105%) contrast(101%);
  cursor: pointer;
  opacity: 0.5;
`;

const Panel = (props) => {
  const { width = 100, height = 100, audio, image, volume = 50, id } = props;
  const setPanelsActive = useContext(SetPanelsActiveContext);
  const panelsActive = useContext(PanelsActiveContext);

  const isActive = panelsActive.includes(id);
  const [sound] = useState(new Audio(audio));

  sound.volume = volume / 100;
  sound.loop = true;
  if (isActive) sound.play();
  else {
    sound.pause();
    sound.currentTime = 0;
  }

  const volumeChange = (value) => {
    sound.volume = value / 100;
  };

  const panelClick = () => {
    if (!isActive) setPanelsActive([...panelsActive, id]);
    else setPanelsActive(panelsActive.filter((panel) => panel !== id));
  };

  return (
    <Wrapper>
      <Icon
        src={image}
        alt="sound"
        width={width}
        height={height}
        onClick={panelClick}
        style={isActive ? { opacity: "1" } : {}}
      />

      <Slider
        defaultValue={volume}
        style={{ width: "50%", visibility: isActive ? "" : "hidden" }}
        onChange={volumeChange}
      />
    </Wrapper>
  );
};

export default Panel;
