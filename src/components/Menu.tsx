import { Links } from ".";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";
import { GrClose } from "react-icons/gr";

const Menu = () => {
  const { menu, setMenu } = useAuth() as DataContextProps;
  return (
    <div
      className={`md:hidden fixed backdrop-blur-sm inset-0 z-10 ${
        !menu && "hidden"
      }`}
    >
      <div className={`max-w-[90%] m-auto mt-8 p-6 rounded-3xl bg-[#eaf5c9]`}>
        <div className="flex justify-between items-center">
          <h2 className="text-sm ">Navigation</h2>
          <button onClick={() => setMenu(false)}>
            <GrClose />
          </button>
        </div>
        <nav className="menu font-semibold">
          <Links classes="mt-4 text-center flex flex-col gap-4" />
        </nav>
      </div>
    </div>
  );
};

export default Menu;
