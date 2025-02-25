import Image from "next/image";
import React from "react";
import { inter } from "../ui/fonts";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Divider, Tooltip } from "antd";

function Footer() {
  return (
    <footer className="p-4 pb-0 bg-[#f5f5f5]">
      <div className="max-w-[1200px]  flex flex-col p-10 mx-auto rounded-t-md">
        <div className="flex justify-between items-center gap-4">
          <div className="flex justify-center items-center">
            <Image
              src={"/logo_colored_lg.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <ul className="flex gap-4">
            <li className="flex flex-col">
              <h1 className="text-base font-bold text-blue">Email</h1>
              <p className={`text-sm ${inter.className}`}>
                pgdc.workmail.phenikaa@gmail.com
              </p>
            </li>
            <li className="flex flex-col">
              <h1 className="text-base font-bold text-blue">Address</h1>
              <p className={`text-sm ${inter.className}`}>
                Phenikaa University, P. Nguyễn Trác, Yên Nghĩa, Hà Đông, Hà Nội
              </p>
            </li>
          </ul>

          <ul className="flex gap-5">
            <li className="text-[#0866ff]">
              <Tooltip title="Facebook" placement="bottom">
                <a
                  href="https://www.facebook.com/pgdc.phenikaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={40} />
                </a>
              </Tooltip>
            </li>
            <li className="text-[#000]">
              <Tooltip title="Github" placement="bottom">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={40} />
                </a>
              </Tooltip>
            </li>
            <li className="text-[#ff0000]">
              <Tooltip title="Youtube" placement="bottom">
                <a
                  href="https://www.youtube.com/@pgdc_gamebase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={40} />
                </a>
              </Tooltip>
            </li>
          </ul>
        </div>

        <Divider className="w-[50%] min-w-[50%] mx-auto" />

        <p className={`text-sm ${inter.className} text-center text-[#6b7280]`}>
          © 2025 Phenikaa Game Development Club
        </p>
      </div>
    </footer>
  );
}

export default Footer;
