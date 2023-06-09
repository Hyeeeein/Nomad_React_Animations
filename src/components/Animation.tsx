import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  margin-bottom: 100px;
`;

const Animation = () => {
  return (
    <Box
      transition={{ type: "spring", delay: 0.5 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}
    />
  );
};

export default Animation;
