import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt=""
                className="w-40 lg:w-56"
                width={500}
                height={500}
              />
            </Link>

            <p className="text-neutral-content mt-4 w-4/5">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>

            <div className="flex gap-3 mt-6 text-neutral-content">
              <Link
                href=""
                className="bg-gray-300 hover:bg-primary hover:text-base-100 w-10 h-10 rounded-full flex justify-center items-center duration-300"
              >
                <BsFacebook className="text-xl" />
              </Link>
              <Link
                href=""
                className="bg-gray-300 hover:bg-primary hover:text-base-100 w-10 h-10 rounded-full flex justify-center items-center duration-300"
              >
                <AiFillLinkedin className="text-[22px]" />
              </Link>
              <Link
                href=""
                className="bg-gray-300 hover:bg-primary hover:text-base-100 w-10 h-10 rounded-full flex justify-center items-center duration-300"
              >
                <AiFillInstagram className="text-2xl" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Our Classes</h2>

            <ul className="mt-4 text-neutral-content text-lg flex flex-col gap-2">
              <li>
                <Link href="" className="hover:text-primary duration-100">
                  Fitness Classes
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-primary duration-100">
                  Aerobics Classes
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-primary duration-100">
                  Power Yoga
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-primary duration-100">
                  Learn Machines
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-primary duration-100">
                  Full-body Strength
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">Working Hours</h2>

            <ul className="mt-4 text-neutral-content text-lg flex flex-col gap-2">
              <li>
                <span className="font-semibold">Monday - Friday:</span> <br />{" "}
                7:00am - 21:00pm
              </li>
              <li>
                {" "}
                <span className="font-semibold">
                  Monday - Friday:
                </span> <br /> 7:00am - 19:00pm
              </li>
              <li>
                <span className="font-semibold">Monday - Friday:</span> <br />{" "}
                7:00am - 21:00pm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
