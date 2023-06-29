import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";
import { GrClose } from "react-icons/gr";

const Search = () => {
  const { openSearch, setOpenSearch, search, setSearch, darkTheme } =
    useAuth() as DataContextProps;
  return (
    <div
      className={`sm:hidden fixed backdrop-blur-sm inset-0 z-10 ${
        !openSearch && "hidden"
      }`}
    >
      <div
        className={`max-w-[90%] m-auto mt-8 p-6 rounded-3xl ${
          darkTheme ? "bg-[#302b63] text-white" : "bg-[#eaf5c9]"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-sm ">Navigation</h2>
          <button
            onClick={() => setOpenSearch(false)}
            className={`${darkTheme ? "bg-white rounded-full p-2" : null}`}
          >
            <GrClose />
          </button>
        </div>
        <nav className="menu font-semibold">
          <input
            type="text"
            placeholder="Enter a keyword"
            className="px-4 py-2 rounded-full mt-6 w-full"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setSearch(e.target.value.toLowerCase())
            }
          />
        </nav>
        <button
          className="bg-white text-black rounded-md px-4 py-2 mt-4"
          onClick={() => setOpenSearch(false)}
        >
          Serach
        </button>
      </div>
    </div>
  );
};

export default Search;
