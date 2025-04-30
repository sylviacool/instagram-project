import React from 'react'
import { CiHeart } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex items-center justify-between ">
      <span className="font-semibold text-xl font-cursive">Instagram</span>
      <div className="flex ">
        <CiHeart />
        <RiMessengerLine />
      </div>
    </header>
  );
}

export default Header