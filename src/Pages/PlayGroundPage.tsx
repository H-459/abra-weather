import React, { Component, useState } from "react";
import styled from "styled-components/macro";
import { IconFacebookLogo, IconMoonDark, IconSunDark } from "../Common/Icon";
import Button from "../Common/Button";
import Switch from "../Common/Switch";
import Input from "../Common/Input";
import customMedia from "../Utils/mediaQuery";
import Alert from "../Common/Alert";

const Container = styled.div`
  background-color: #b7b7b7;
  ${customMedia.greaterThan("desktop")`
    background-color: red;
  `};

  ${customMedia.between("tablet", "desktop")`
    background-color: green;
  `};

  padding: 10px;
`;
const ButtonStyle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NewAlert = styled(Alert)`
  width: 500px;
`

const PlayGroundPage = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [text, setText] = useState<string>("");

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
      <Switch
        id={"degree-id"}
        value={toggle}
        left={<IconMoonDark />}
        right={<IconSunDark />}
        onChange={() => {
          setToggle(!toggle);
        }}
      ></Switch>

      {/* <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        title={"Email account"}
        // error={"this is an error"}
        placeholder="6 charaters and digit numbers blabla"
      ></Input>
      <p>Error</p> */}
      <NewAlert severity="error">
        Connection is lost. Please check your connection device and try again.
      </NewAlert>
      <p>Success</p>
      <Alert severity="success">Tel Aviv - Jaffa has added to favorites</Alert>
    </Container>
  );
}

export default PlayGroundPage;