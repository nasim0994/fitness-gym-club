import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="text-base-100 h-[91vh] hero_wrap">
      <div className="2xl:w-[1500px] mx-auto relative h-full">
        <div className="container h-full relative">
          <div className="grid grid-cols-2 gap-10 items-center justify-center h-full">
            <div></div>

            <div>
              <p className="text_bg_red">FIND YOUR ENERGY</p>
              <h2 className="text-5xl mt-6">MAKE YOUR BODY</h2>
              <h2 className="text-5xl mt-4">FIT & PERFECT</h2>

              <div className="mt-12">
                <button className="primary-btn">
                  Our Classes <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-[45%]">
          <div className="-rotate-90 flex flex-row-reverse gap-3 items-center">
            <h2 className="">FOLLOW</h2>
            <div className="w-7 h-[2px] bg-primary"></div>
            <div className="rotate-90 flex flex-col gap-3 mr-10 ">
              <Link href="" className="hover:text-primary text-xl duration-300">
                <BsFacebook />
              </Link>
              <Link
                href=""
                className="hover:text-primary text-[22px] duration-300"
              >
                <AiFillLinkedin />
              </Link>
              <Link
                href=""
                className="hover:text-primary text-[22px] duration-300"
              >
                <AiFillInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
