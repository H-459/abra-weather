/*
- Finish up the button Component. Add ghost/link styles. 
  - Add disabled state
  - Add option for icons

- Try to implmenent a toggle component.
- If you still have time, go to the innput component */


import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import { IconFacebookLogo } from "./Common/Icon";
import Button from "./Common/Button"; 
const App: React.FC = () => {
  return (
    <>
      <Button variant="primary"><IconFacebookLogo />test</Button>
      
      <p>test</p>
      <h1>test</h1>
    </>
  );
};

export default App;
