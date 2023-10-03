import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

export default function Pricing() {
  return (
    <section className="py-20 pricing_wrap" id="pricing">
      <div className="container">
        <div className="text-center">
          <h2 className="text_bg_red mx-auto">PRICING CHART</h2>
          <h2 className="text-4xl mt-4">Exclusive Pricing Plan</h2>
          <p className="mt-4 md:w-1/2 mx-auto text-neutral-content">
            FITNESS GYM CLUB an unknown printer took a galley of type and
            scrambled make a type specimen book.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:flex gap-4 justify-center items-center">
            <div className="pricing_card">
              <h2 className="text-center text-2xl">Beginners</h2>

              <div className="mt-10 flex items-end gap-1">
                <h1 className="text-5xl font-bold">$2000</h1>
                <p className="text-lg">/Month</p>
              </div>

              <ul className="mt-10">
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Free Hand</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Gym Fitness</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Weight Loss</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Cycling</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Personal Trainer</p>
                </li>
              </ul>

              <div className="mt-24">
                <Link href="" className="secondary-btn">
                  PURCHASE NOW <BsArrowRightShort />
                </Link>
              </div>
            </div>

            <div className="pricing_card">
              <h2 className="text-center text-2xl">Advance</h2>

              <div className="mt-10 flex items-end gap-1">
                <h1 className="text-5xl font-bold">$4000</h1>
                <p className="text-lg">/Month</p>
              </div>

              <ul className="mt-10">
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Free Hand</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Gym Fitness</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Weight Loss</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Cycling</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Personal Trainer</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Personal Trainer</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Personal Trainer</p>
                </li>
              </ul>

              <div className="mt-24">
                <Link href="" className="primary-btn">
                  PURCHASE NOW <BsArrowRightShort />
                </Link>
              </div>
            </div>

            <div className="pricing_card">
              <h2 className="text-center text-2xl">Premium</h2>

              <div className="mt-10 flex items-end gap-1">
                <h1 className="text-5xl font-bold">$5000</h1>
                <p className="text-lg">/Month</p>
              </div>

              <ul className="mt-10">
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Free Hand</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Gym Fitness</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Weight Loss</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Cycling</p>
                </li>
                <li className="flex gap-4 items-center">
                  <AiFillCheckCircle />
                  <p>Personal Trainer</p>
                </li>
              </ul>

              <div className="mt-24">
                <Link href="" className="secondary-btn">
                  PURCHASE NOW <BsArrowRightShort />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
