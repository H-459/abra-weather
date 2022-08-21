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
import Layout from "./Pages/Layout";
import { AuthenticationProvider } from "./Services/Authentication";
import { QueryClient, QueryClientProvider } from "react-query";
const BackgroundStyle = styled.div`
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff),
    linear-gradient(to bottom, #fff, #fff);
  height: 100vh;
`;

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <>
      <BackgroundStyle>
        <QueryClientProvider client={queryClient}>
          <AuthenticationProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Layout />} />
              <Route path="/favorites" element={<Layout />} />
            </Routes>
          </AuthenticationProvider>
        </QueryClientProvider>
      </BackgroundStyle>
    </>
  );
};

export default App;
