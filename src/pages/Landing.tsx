import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center main-color">
      <h1 className="font-header text-xl md:text-4xl">
        Enjoy your holiday with movies!
      </h1>
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
