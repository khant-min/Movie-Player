import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center main-color">
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: "-100%vh" },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="font-header text-xl md:text-4xl"
      >
        Enjoy your holiday with movies!
      </motion.h1>
      <motion.button
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255, 255, 255)",
          boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        }}
        className="bg-[#afa7e7] text-[#302b63] font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full"
        onClick={() => navigate("/home")}
      >
        Start Watching
      </motion.button>
    </div>
  );
};

export default Landing;
