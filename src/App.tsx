/*
- Finish up the button Component. Add ghost/link styles. 
  - Add disabled state
  - Add option for icons

- Try to implmenent a toggle component.
- If you still have time, go to the innput component */

import React, { Component } from "react";
import styled from "styled-components/macro";
import { IconFacebookLogo } from "./Common/Icon";
import Button from "./Common/Button";

const Container = styled.div`
  background-color: #b7b7b7;
  padding: 10px;
`;
const ButtonStyle = styled.div`
  display: flex;
  gap: 8px;
`;
const App: React.FC = () => {
  return (
    <Container>
      <Button onClick={() => console.log("clicked")} disabled variant="primary">
        test
      </Button>
      <Button onClick={() => console.log("clicked")} variant="ghost">
        test
      </Button>
      <Button onClick={() => console.log("clicked")} variant="link">
        <ButtonStyle>
          <IconFacebookLogo />
          Log in with facebook
        </ButtonStyle>
      </Button>
      <Button onClick={() => console.log("clicked")} variant="white">
        test
      </Button>

      <p>test</p>
      <h1>test</h1>
    </Container>
  );
};

export default App;
