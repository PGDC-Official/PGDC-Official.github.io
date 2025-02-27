import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white text-black p-4 shadow-md backdrop-blur-sm fixed top-0 left-0 right-0 z-[1]">
      <nav className="max-w-[1280px] flex flex-row justify-between items-center mx-auto bg-transparent">
        <Link href="/">
          <Image src={"/logo_colored_lg.svg"} alt="logo" width={50} height={50} />
        </Link>

        <div className="flex space-x-4">
          <Link href="#about" className="p-2 hover:bg-gray-100 bg-transparent transition rounded-md cursor-pointer hover:border hover:border-gray-200 border border-transparent">
            <span className="font-semibold text-blue">About</span>
          </Link>
          <Link href="#contact" className="p-2 hover:bg-gray-100 bg-transparent transition rounded-md cursor-pointer hover:border hover:border-gray-200 border border-transparent">
            <span className="font-semibold text-blue">Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
