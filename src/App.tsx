import React from 'react';
import './App.css';
import Sidebar from './core/components/SideBar';
import styled from 'styled-components';
import Videos from './videos/components/Videos';

const Container = styled.div`
  position: relative;
  float: right;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  min-height: 100%;
  background-color: transparent;
`;



function App() {
  return (
    <>
    <Sidebar/>
    <Container>
      <Videos />
    </Container>
    </>
  );
}

export default App;
