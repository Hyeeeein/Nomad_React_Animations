import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const BasicWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-around;

  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const UpgradeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Boxs = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const LayoutAnimation = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  const [id, setId] = useState<null | string>(null);

  return (
    <>
      <Title>Basic</Title>
      <BasicWrapper onClick={toggleClicked}>
        <Box>
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
          ) : null}
        </Box>
      </BasicWrapper>

      <Title>Upgrade</Title>
      <UpgradeWrapper>
        <Grid>
          {["1", "2", "3", "4"].map((n) => (
            <Boxs
              onClick={() => {
                setId(n);
                document.body.style.overflowY = "hidden";
              }}
              key={n}
              layoutId={n}
            />
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              variants={overlay}
              onClick={() => {
                setId(null);
                document.body.style.overflowY = "scroll";
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Boxs layoutId={id} style={{ width: 400, height: 200 }} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </UpgradeWrapper>
    </>
  );
};

export default LayoutAnimation;
