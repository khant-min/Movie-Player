import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Input, Text } from "@chakra-ui/react";
import { BsMoonStars } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";

const Navbar = () => {
  const navigate = useNavigate();
  const { search, setSearch, dark, setDark } = useAuth() as DataContextProps;
  return (
    <Box className="flex justify-between bg-[#eaf5c9] text-black p-4 font-brand">
      <Heading
        className="text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Text>MoviePlayer</Text>
      </Heading>
      <ul className="flex gap-10 items-center">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="detail">Detail</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <Box className="flex gap-3">
        <div className="relative">
          <label htmlFor="search" className="absolute left-2 top-2.5 text-xl">
            <BiSearchAlt />
          </label>
          <Input
            id="search"
            placeholder="Enter a keyword"
            className="rounded-full px-8 py-2 shadow-inner"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setSearch(e.target.value.toLowerCase())
            }
          />
        </div>
        <Box
          onClick={() => setDark((dark) => !dark)}
          className="rounded-full  px-4 py-2 hover:outline outline-1 outline-white shadow-md cursor-pointer"
        >
          {dark ? (
            <BsSun className="text-xl text-yellow-600" />
          ) : (
            <BsMoonStars className="text-xl text-teal-300" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

/// navbar - #192841
