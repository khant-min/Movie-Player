import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import { BsMoonStars } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box className="flex justify-between bg-[#192841] text-white p-4 font-brand">
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
          <Link to="search">Search</Link>
        </li>
      </ul>
      <Box className="rounded-full  px-4 py-2 hover:outline outline-1 outline-white shadow-md">
        <IconButton
          aria-label="light"
          icon={<BsMoonStars />}
          className="text-xl text-teal-300"
        />
      </Box>
    </Box>
  );
};

export default Navbar;
