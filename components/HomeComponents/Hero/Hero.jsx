import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
  return (
    <section className="text-base-100 h-[91vh] hero_wrap">
      <div className="2xl:w-[1500px] mx-auto relative h-full">
        <div className="container h-full relative">
          <div className="grid xl:grid-cols-2 gap-10 items-center justify-center h-full">
            <div className="hidden xl:block"></div>

            <div>
              <h2 className="text_bg_red mx-auto sm:mx-0">FIND YOUR ENERGY</h2>
              <div className="mt-6 text-center sm:text-start text-4xl sm:text-5xl">
                <h2>MAKE YOUR BODY</h2>
                <h2 className="mt-4">FIT & PERFECT</h2>
              </div>

              <div className="mt-12 flex justify-center sm:justify-start">
                <button className="primary-btn">
                  Our Classes <BsArrowRightShort />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-[45%] hidden sm:block">
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
