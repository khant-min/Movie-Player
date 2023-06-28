import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from ".";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
