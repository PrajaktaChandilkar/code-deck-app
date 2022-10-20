import React, { useContext, useState } from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { ModalContext } from "../context/ModalContext";
import { PlaygroundContext } from "../context/PlaygroundContext";
import EditCardTitle from "./modalTypes/EditCardTitle";
import NewCard from "./modalTypes/NewCard";
import NewFolder from "./modalTypes/NewFolder";
import EditFolderTitle from "./modalTypes/EditFolderTitle";
import NewFolderAndPlayground from "./modalTypes/NewFolderAndPlayground";

const ModalContainer = styled.div`{
    background:rgba(0,0,0,0.4);
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:2;

    display: flex;
    justify-content: center;
    align-items: center;
}`;

const ModalContent = styled.div`{
    background:white;
    width: 35%;
    padding: 2rem;
    border-radius: 10px;
}`;

 export const Header = styled.div`
    display: flex;
    align-atems: center;
    justify-content: space-between;
`;

export const CloseButton = styled.button`{
    background:transparent;
    outline:0;
    border:0;
    font-size: 2rem;
    cursor:pointer;
}`;

export const Input = styled.div`{
    display: flex;
    align-items: center;
    justify-content:space-between; 
    padding: 1.5rem 0;
    padding-bottom:0;
    gap: 2rem;
    input{
        flex-grow: 1;
        height: 2rem;
    }
    button {
        background: #241f21;
        padding: 0 2rem;
        height: 2rem;
        color: white;
    }
}`;


const EditCardModal = ({
     isOpen,closeModal, 
    }: { 
        closeModal: () => void , isOpen: any 
    }) => {
    const PlaygroundFeatures = useContext(PlaygroundContext)!
    const folders = PlaygroundFeatures.folders;
    console.log(folders)
    const currentFolder = folders[isOpen.identifier.folderId];
    console.log(currentFolder.items)
    const currentCard = currentFolder.items[isOpen.identifier.cardId]
    console.log('current card',currentCard)
    //const currentCard = folders[isOpen.identifier.folderId][isOpen.identifier.cardId]

    return (
        <>
            <Header>
                <h2 className="Heading">Edit card title</h2>
                <CloseButton
                    onClick={() => {
                       closeModal()
                    }}
                >
                    <RiCloseFill />
                </CloseButton>
            </Header>
            <Input>
                <input type='text' value={currentCard.title} />
                <button>Update Title</button>
            </Input>
        </>

    )
}
const AddModal = () => {
    return <div>Add modal</div>
}
const AnotherModal = () => {
    return <div>Another modal</div>
}

export interface ModalProps {
    closeModal: () => void;
    identifier: {
      folderId: string;
      cardId: string;
    };
  }

const Modal = () => {
    const ModalFeatures = useContext(ModalContext)!;
    const {closeModal} = ModalFeatures
    const isOpen = ModalFeatures.isOpen
    return (
        <ModalContainer>
        <ModalContent>
          {isOpen.type === "1" && (
            <EditCardTitle closeModal={closeModal} identifier={isOpen.identifier} />
          )}
          {isOpen.type === "2" && (
            <EditFolderTitle
              closeModal={closeModal}
              identifier={isOpen.identifier}
            />
          )}
          {isOpen.type === "3" && (
            <NewCard closeModal={closeModal} identifier={isOpen.identifier} />
          )}
          {isOpen.type === "4" && (
            <NewFolder closeModal={closeModal} identifier={isOpen.identifier} />
          )}
          {isOpen.type === "5" && (
            <NewFolderAndPlayground
              closeModal={closeModal}
              identifier={isOpen.identifier}
            />
          )}
        </ModalContent>
      </ModalContainer>
    )
}

export default Modal