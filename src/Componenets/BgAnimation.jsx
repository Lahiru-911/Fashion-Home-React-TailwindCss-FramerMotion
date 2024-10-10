import { motion } from "framer-motion";

const BgAnimation = () => {
  return (
    <>
      {/* bg.Main */}
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "100vw",
        }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute top-0 left-0 z-0 h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      ></motion.div>

      {/* Bg.Small.Squa*/}
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "90vw",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.7,
        }}
        className="absolute bottom-0 left-0 z-20 bg-[#838585] border border-t-1 border-white h-[20vh] border-l-0 border-b-0 "
      ></motion.div>

      {/* Bg.Large.Squa*/}
      <motion.div
        initial={{
          x: "-100vw",
          rotateZ: 20,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="absolute z-10 bg-[#838585] h-[170vh] w-[60vw] -left-[10vw] -top-[50vh]"
      ></motion.div>
    </>
  );
};

export default BgAnimation;
