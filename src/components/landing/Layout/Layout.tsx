import { Box } from "@mui/material";
import { Footer } from "../Footer";
import { Header } from "../Header";
import React, { ReactNode } from "react";
type DefaultLayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box>
      <Header inverse={false} />
      {children}
      <Footer />
    </Box>
  );
};
