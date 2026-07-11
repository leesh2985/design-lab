import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />

      {/* Header 높이만큼 공간 확보 */}
      <Toolbar />

      <Box component="main">
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default Layout;
