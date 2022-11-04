import React from "react";
import Button from "../Button";

const TopNavbar = () => {
  return (
    <nav className="flex align-middle justify-between p-5 shadow-smooth bg-white">
      <img src="/eraspace.svg" alt="logo-eraspace" />
      <Button>Download</Button>
    </nav>
  );
};

export default TopNavbar;
