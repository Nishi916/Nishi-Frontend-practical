import React from "react";
import { CgProfile} from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white flex justify-end items-center p-8">
      <h1 className="text-3xl md:block hidden">
        <IoIosNotifications  />
      </h1>
      <h1 className="text-4xl md:block hidden ml-2">
        <CgProfile />
      </h1>
      <button
        className="text-2xl focus:outline-none md:hidden"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
