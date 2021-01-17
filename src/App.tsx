import React from 'react';
import './App.css';
import Sidebar from './core/components/SideBar';
import styled from 'styled-components';
import Videos from './videos/components/Videos';


const BrowserContainer = styled.div`
  position: relative;
  float: right;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  min-height: 100%;
  background-color: transparent;
`;

const MobileContainer = styled.div`
  position: relative;
  float: right;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
  background-color: transparent;
`;




function App() {
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const handleWindowSizeChange = () => {
      setInnerWidth(window.innerWidth);
  }

  React.useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
  }, [])

  const isMobile = innerWidth < 600;

  if (isMobile) {
      return (
        <>
          <div></div>
          <MobileContainer >
            <Videos />
          </MobileContainer>
        </>
      )
  };
    
  return (
    <>
      <Sidebar/>
      <BrowserContainer >
        <Videos />
      </BrowserContainer>
    </>
  );
}

export default App;
