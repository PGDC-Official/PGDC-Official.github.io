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

        <ul className="flex space-x-4">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
