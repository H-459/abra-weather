/*
- Finish up the button Component. Add ghost/link styles. 
  - Add disabled state
  - Add option for icons

- Try to implmenent a toggle component.
- If you still have time, go to the innput component */

import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components/macro";
import PlayGroundPage from "./Pages/PlayGroundPage";
import LoginPage from "./Pages/LoginPage";

const BackgroundStyle = styled.div`
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff),
    linear-gradient(to bottom, #fff, #fff);
    height: 100vh;
`;
const App: React.FC = () => {
  return (
    <>
      <BackgroundStyle>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/" element={<PlayGroundPage />} /> */}
        </Routes>
      </BackgroundStyle>
    </>
  );
};

export default App;
