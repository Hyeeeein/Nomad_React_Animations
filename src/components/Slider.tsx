import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "../App";

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 250px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  invisible: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.5 },
  }),
};

const Slider = () => {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setIsBack(false);
  };
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setIsBack(true);
  };
  return (
    <>
      <Wrapper>
        <AnimatePresence mode="wait" custom={isBack}>
          <Box
            custom={isBack}
            variants={box}
            initial="invisible"
            animate="visible"
            exit="exit"
            key={visible}
          >
            {visible}
          </Box>
        </AnimatePresence>
      </Wrapper>
      <div style={{ marginBottom: 50 }}>
        <Button onClick={prevPlease}>prev</Button>
        <Button onClick={nextPlease}>next</Button>
      </div>
    </>
  );
};

export default Slider;
