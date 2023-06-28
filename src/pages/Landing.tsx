import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center main-color">
      <motion.h1
        className="font-header text-xl md:text-4xl"
        animate={{ fontSize: 60, color: "red" }}
      >
        Enjoy your holiday with movies!
      </motion.h1>
      <button
        className="bg-[#afa7e7] text-[#302b63] font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full"
        onClick={() => navigate("/home")}
      >
        Start Watching
      </button>
    </div>
  );
};

export default Landing;
