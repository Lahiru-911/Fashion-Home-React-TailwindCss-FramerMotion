import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 110,
      }}
      className="tracking-widest text-white uppercase"
    >
      <div className="text-3xl">Fashion Bug</div>

      <div className="text-sm text-gray-400">Best in the Market Right Now</div>
    </motion.div>
  );
};

export default Logo;
