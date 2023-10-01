import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { BiSolidPlusSquare } from "react-icons/bi";

export default function Header() {
  return (
    <header className="bg-accent py-4 text-base-100">
      <div className="w-[90%] 2xl:w-[1400px] mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo/logo_w.png"
              alt=""
              className="w-48"
              width={500}
              height={500}
            />
          </Link>

          <nav>
            <ul className="flex gap-6 text-[15px] font-medium">
              <Menu />
            </ul>
          </nav>

          <div className="flex gap-4 items-center">
            <Link
              href=""
              className="text-[21px] hover:text-primary duration-300"
            >
              <VscAccount />
            </Link>
            <button className="text-xl hover:text-primary duration-300">
              <FiSettings />
            </button>
            <Link href="" className="header_btn">
              <BiSolidPlusSquare />
              JOIN CLASS NOW
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
