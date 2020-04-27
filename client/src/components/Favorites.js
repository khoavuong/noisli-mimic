import React, { useContext } from "react";
import styled from "styled-components";
import { Button, Badge, Modal } from "antd";
import {
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { SetPanelsActiveContext } from "../pages/PlayList";

const { confirm } = Modal;

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const Favorites = ({ favorites, setFavorites }) => {
  const setPanelsActive = useContext(SetPanelsActiveContext);

  const showDeleteConfirm = ({ name }) => {
    confirm({
      title: `Are you sure you want to delete "${name}"?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        localStorage.setItem(
          "favorite-combos",
          JSON.stringify(favorites.filter((favorite) => favorite.name !== name))
        );
        setFavorites(favorites.filter((favorite) => favorite.name !== name));
      },
    });
  };

  const renderFavorites = () => {
    if (!favorites || favorites.length === 0) return "Favorite List is empty";

    return favorites.map((favorite, index) => (
      <Badge
        key={index}
        count={<CloseCircleOutlined style={{ color: "#f5222d" }} />}
        offset={[-3, 3]}
        style={{ cursor: "pointer" }}
        onClick={() => showDeleteConfirm(favorite)}
      >
        <Button
          shape="round"
          className="combo-button"
          onClick={(e) => {
            setPanelsActive(favorite.combo);
            e.stopPropagation();
          }}
        >
          {favorite.name}
        </Button>
      </Badge>
    ));
  };

  return <Container>{renderFavorites()} </Container>;
};
