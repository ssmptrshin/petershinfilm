import React from 'react';
import styled from 'styled-components';
import logo from 'src/assets/img/Logo2-01.png'

interface SidebarProps {
    isMobile?: boolean
}

const SidebarContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100vh;
    background-color: #151515;
    border-right: 1px solid #707070;
`;

const SideBarItemsContainer = styled.div`
    display: flex;
    height: 15%;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const NavText = styled.div`
    color: #B1B1B1;
    font-size: 2vh;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 6px;
    font-weight: 500;

    :after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: white;
        transition: width .3s;
    }

    :hover:after {
        width: 100%;
    }

    :hover {
        color: white;
        border-color: white;
        border-width: 1px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;
    }
`;

const Logo = styled.div`
    background-image: url(${logo});
    background-size: contain;
    width: 45%;
    height: 15%;
    background-repeat: no-repeat;
    background-position: center center;
`;

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    return (
    <SidebarContainer>
        <Logo />
        <SideBarItemsContainer>
            <NavText>ABOUT</NavText>
            <NavText>VIDEOS</NavText>
            <NavText>CONTACT</NavText>
        </SideBarItemsContainer>
    </SidebarContainer>)
    
}

export default Sidebar;