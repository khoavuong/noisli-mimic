import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Tabs, Button, Modal, Input } from "antd";
import { Combos } from "./Combos";
import { Favorites } from "./Favorites";
import { SetPanelsActiveContext, PanelsActiveContext } from "../pages/PlayList";

const { TabPane } = Tabs;

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1000px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 100px;
  margin-top: 50px;
`;

const TabBar = () => {
  const setPanelsActive = useContext(SetPanelsActiveContext);
  const panelsActive = useContext(PanelsActiveContext);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorite-combos"))
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [newFavoriteName, setNewFavoriteName] = useState("");

  const handleOk = () => {
    const newFavorite = { name: newFavoriteName, combo: panelsActive };

    if (!favorites) {
      localStorage.setItem("favorite-combos", JSON.stringify([newFavorite]));
      setFavorites([newFavorite]);
    } else {
      localStorage.setItem(
        "favorite-combos",
        JSON.stringify([...favorites, newFavorite])
      );
      setFavorites([...favorites, newFavorite]);
    }

    setNewFavoriteName("");
    setModalVisible(false);
  };

  const saveClear = (
    <div>
      <Button
        shape="round"
        style={{ marginRight: "10px" }}
        type="primary"
        disabled={!panelsActive.length}
        onClick={() => setModalVisible(true)}
      >
        Save
      </Button>
      <Modal
        title="Give this combo a name"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={() => setModalVisible(false)}
      >
        <Input
          value={newFavoriteName}
          placeholder="Combo's name"
          onChange={(e) => {
            setNewFavoriteName(e.target.value);
          }}
        />
      </Modal>

      <Button
        type="danger"
        shape="round"
        disabled={!panelsActive.length}
        onClick={() => setPanelsActive([])}
      >
        Clear
      </Button>
    </div>
  );

  return (
    <Container>
      <Tabs tabBarExtraContent={saveClear} style={{ color: "white" }}>
        <TabPane tab="Playlist" key="1">
          <Combos></Combos>
        </TabPane>
        <TabPane tab="Favorites" key="2">
          <Favorites
            favorites={favorites}
            setFavorites={setFavorites}
          ></Favorites>
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default TabBar;
