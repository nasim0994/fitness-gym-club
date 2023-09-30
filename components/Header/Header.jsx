import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-accent py-4 text-base-100">
      <div className="w-[90%] 2xl:w-[1500px] mx-auto">
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

          <div>
            <button>
              <VscAccount />
            </button>
            <button>
              <FiSettings />
            </button>
            <button>Join now</button>
          </div>
        </div>
      </div>
    </header>
  );
}
