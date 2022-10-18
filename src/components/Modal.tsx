import React from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";

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

const Header = styled.div`
    display: flex;
    align-atems: center;
    justify-content: space-between;
`;

const CloseButton = styled.button`{
    background:transparent;
    outline:0;
    border:0;
    font-size: 2rem;
    cursor:pointer;
}`;

const Modal = () => {
    return (
        <ModalContainer>
            <ModalContent>
                <Header>
                    <h2 className="Heading">Update Folder name</h2>
                    <CloseButton>
                        <RiCloseFill />
                    </CloseButton>
                </Header>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal