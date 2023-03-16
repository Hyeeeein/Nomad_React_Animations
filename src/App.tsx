import React from "react";
import styled from "styled-components";
import Animation from "./components/Animation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag from "./components/Drag";
import MotionValue from "./components/MotionValue";

const Wrapper = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: bold;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Animation</Title>
      <Animation />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Title>Variants</Title>
      <Variants />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Title>Gestures</Title>
      <Gestures />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Title>Drag</Title>
      <Drag />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Title>MotionValue</Title>
      <MotionValue />
    </Wrapper>
  );
};

export default App;
