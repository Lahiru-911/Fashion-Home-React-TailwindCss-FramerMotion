import { motion } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.6,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
    x: -100,
    y: 100,
    rotateZ: 20,
  },

  animate: (custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotateZ: custom === 0 ? -20 : custom === 1 ? 0 : 20,
  }),
};

const Hero = () => {
  return (
    <div className="grid w-full max-w-screen-lg grid-cols-3 mx-auto">
      <div className="relative z-10 flex flex-col col-span-2 gap-3 text-left pt-[20vh]">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="w-full"
        >
          <h1 className="text-5xl tracking-wide text-transparent uppercase bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">
            Checkout our
          </h1>
          <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-100 to-purple-100">
            New collection
          </h1>
          <p className="py-2 text-base tracking-wider text-gray-400 uppercase">
            New deals for this Chrismas for your loved ones
          </p>
          <button className="py-2 text-white border border-white w-[20vw] px-4 text-md tracking-widest uppercase mt-3">
            See more
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-40 "
      >
        <motion.img
          variants={imgVariants}
          custom={0}
          src="/30.TN.png"
          className="h-[70vh] w-full -left-[10vw] -rotate-12 absolute object-cover z-10 "
        />

        <motion.img
          variants={imgVariants}
          custom={1}
          src="/12..TN.png"
          className="h-[70vh] w-full absolute object-cover z-10"
        />

        <motion.img
          variants={imgVariants}
          custom={2}
          src="/TN 16.png"
          className="h-[70vh] left-[10vw] rotate-12 w-full absolute object-cover z-10"
        />
      </motion.div>
    </div>
  );
};
export default Hero;
