"use client";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { BiSolidPlusSquare } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-accent py-4 text-base-100 sticky top-0 z-50">
      <div className="w-[90%] 2xl:w-[1400px] mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo/logo_w.png"
              alt=""
              className="w-40 lg:w-48"
              width={500}
              height={500}
            />
          </Link>

          <nav>
            <button
              onClick={() => setMobileMenu(false)}
              className={`lg:hidden menu_overlay ${
                mobileMenu && "menu_overlay_show"
              }`}
            ></button>

            <ul
              className={`menu ${
                mobileMenu && "menu_show"
              } lg:flex gap-4 lg:gap-6 text-[15px] font-medium`}
            >
              <div className="flex justify-end lg:hidden mb-6">
                <button
                  onClick={() => setMobileMenu(false)}
                  className=" text-xl text-neutral-content"
                >
                  <AiOutlineClose />
                </button>
              </div>

              <Menu />
            </ul>
          </nav>

          <div className="flex gap-4 items-center">
            <button
              onClick={() => setMobileMenu(true)}
              className="text-xl lg:hidden"
            >
              <AiOutlineMenu />
            </button>

            <Link href="" className="text-2xl hover:text-primary duration-300">
              <VscAccount />
            </Link>
            <Link href="" className="header_btn hidden sm:flex">
              <BiSolidPlusSquare />
              JOIN CLASS NOW
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
