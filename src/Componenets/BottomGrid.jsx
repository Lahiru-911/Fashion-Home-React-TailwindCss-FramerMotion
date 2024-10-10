import { motion } from "framer-motion";
import BottomBox from "./BottomBox";

const containerVariants = {
  animate: {
    transition: {
      delayChildren: 2.5,
      staggerChildren: 0.4,
    },
  },
};

const BottomGrid = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="absolute z-30 grid w-full max-w-screen-lg grid-cols-3 gap-4 mx-auto -translate-x-1/2 bottom-2 left-1/2 h-[10vh]"
    >
      <BottomBox>Best Deals this Chrismaxxx</BottomBox>
      <BottomBox>Best Deals this Chrismaxxx</BottomBox>
      <BottomBox>Best Deals this Chrismaxxx</BottomBox>
    </motion.div>
  );
};

export default BottomGrid;
