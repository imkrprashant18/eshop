import React, { ReactNode } from "react";
import { Footer, NavBar } from "..";

interface RootLayoutProps {
  children: ReactNode; // Specifies that the `children` prop can be any valid React node
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
