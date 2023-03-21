import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Animation from "./components/Animation";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import Drag from "./components/Drag";
import MotionValue from "./components/MotionValue";
import Path from "./components/Path";
import AnimatePresences from "./components/AnimatePresences";
import Slider from "./components/Slider";
import LayoutAnimation from "./components/LayoutAnimation";

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

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  padding: 5px 10px;
  font-size: 20px;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Animation</Title>
      <Animation />

      <Title>Variants</Title>
      <Variants />

      <Title>Gestures</Title>
      <Gestures />

      <Title>Drag</Title>
      <Drag />

      <Title>MotionValue</Title>
      <MotionValue />

      <Title>Path</Title>
      <Path />

      <Title>AnimatePresence</Title>
      <AnimatePresences />

      <Title>Slider</Title>
      <Slider />

      <Title>LayoutAnimation</Title>
      <LayoutAnimation />
    </Wrapper>
  );
};

export default App;
