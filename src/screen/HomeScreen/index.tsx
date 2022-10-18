import React, {useContext} from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import styled from "styled-components";
import Modal from "../../components/Modal";
import { ModalContext } from "../../context/ModalContext";

const HomeScreenContainer = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 1.5fr;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const HomeScreen = () => {

  const ModalFeatures = useContext(ModalContext)
  const isOpen = ModalFeatures?.isOpen;
  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
      {isOpen === true ? <Modal />  : <></>}
    </HomeScreenContainer>
  );
};

export default HomeScreen;