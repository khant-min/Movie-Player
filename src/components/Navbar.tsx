import { useNavigate } from "react-router-dom";
import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { BsMoonStars } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";
import { Links, Menu, Search } from ".";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const { search, setSearch, darkTheme, setDarkTheme, setMenu, setOpenSearch } =
    useAuth() as DataContextProps;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
      className={`animate sticky top-0 z-10 flex justify-between p-4 font-brand ${
        darkTheme ? "bg-[#302b63] text-white" : "bg-[#eaf5c9] text-black "
      }`}
    >
      <Heading
        className="text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Text>MoviePlayer</Text>
      </Heading>

      <Links classes="hidden md:flex gap-10 items-center" />

      <Box
        onClick={() => setMenu((open) => !open)}
        className="md:hidden w-full flex justify-end items-center px-3 text-3xl cursor-pointer"
      >
        <IoMenu />
      </Box>

      <Box className="flex gap-3">
        <div className="flex items-center sm:relative text-black">
          <label
            htmlFor="search"
            className="sm:absolute left-2 top-2.5 text-3xl sm:text-2xl cursor-pointer"
            onClick={() => setOpenSearch((open) => !open)}
          >
            <BiSearchAlt />
          </label>
          <Input
            id="search"
            placeholder="Enter a keyword"
            className="rounded-full px-8 py-2 shadow-inner hidden sm:block"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setSearch(e.target.value.toLowerCase())
            }
          />
        </div>
        <Box
          onClick={() => {
            setDarkTheme((theme) => !theme);
            localStorage.setItem("isDark", JSON.stringify(!darkTheme));
          }}
          className="rounded-full px-4 py-2 hover:outline outline-1 outline-white shadow-md cursor-pointer"
        >
          {darkTheme ? (
            <BsMoonStars className="text-xl text-teal-300" />
          ) : (
            <BsSun className="text-xl text-yellow-600" />
          )}
        </Box>
      </Box>
      <Menu />
      <Search />
    </motion.div>
  );
};

export default Navbar;
