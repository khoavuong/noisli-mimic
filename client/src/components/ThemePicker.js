import React from "react";
import { Select } from "antd";

const { Option } = Select;
const themes = [
  { name: "Green", color: "rgb(20, 97, 75)" },
  { name: "Pink", color: "rgb(241, 107, 107)" },
  { name: "Blue", color: "rgb(52, 152, 219)" },
  { name: "Purple", color: "rgb(73, 64, 170)" },
  { name: "Orange", color: "rgb(250, 121, 0)" },
];

export const ThemePicker = ({ setTheme }) => {
  const renderOptions = () =>
    themes.map((currentTheme, index) => (
      <Option
        key={index}
        value={currentTheme.color}
        style={{ textAlign: "center", backgroundColor: currentTheme.color }}
      >
        {currentTheme.name}
      </Option>
    ));

  return (
    <>
      <Select
        defaultValue="Select a theme color"
        style={{ width: 200, textAlign: "center" }}
        onChange={(value) => setTheme(value)}
        dropdownStyle={{ padding: 0 }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};
