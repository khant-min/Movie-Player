import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from ".";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
