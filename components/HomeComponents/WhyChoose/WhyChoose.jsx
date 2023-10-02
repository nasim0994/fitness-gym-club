import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function WhyChoose() {
  return (
    <section className="py-20 why_choose_wrap">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="relative flex justify-center">
            <Image
              src="/images/WhyChoose/video_thum.png"
              alt=""
              width={500}
              height={500}
            />
          </div>

          <div className="text-base-100">
            <h2 className="text_bg_red">WHY CHOOSE US</h2>
            <h2 className="my-6 text-3xl md:text-4xl">
              We Can Give A Shape Of Your Body Here!
            </h2>

            <p className="opacity-90 text-sm sm:text-base">
              At FITNESS GYM CLUB, we are dedicated to helping you achieve the
              body of your dreams. Our expert trainers and nutritionists will
              work with you to create a personalized fitness and nutrition plan
              that helps you reach your specific goals.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="flex gap-3 items-center">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-neutral">
                  <Image
                    src="/images/WhyChoose/1.png"
                    alt=""
                    className="w-[60%]"
                    width={500}
                    height={500}
                  />
                </div>

                <p className="md:text-xl font-semibold">
                  Free Fitness Training
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-16 lg:w-20 h-16 rounded-full flex justify-center items-center bg-neutral">
                  <Image
                    src="/images/WhyChoose/2.png"
                    alt=""
                    className="w-[60%]"
                    width={500}
                    height={500}
                  />
                </div>

                <p className="md:text-xl font-semibold">
                  Modern Gym Equipments
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-neutral">
                  <Image
                    src="/images/WhyChoose/3.png"
                    alt=""
                    className="w-[60%]"
                    width={500}
                    height={500}
                  />
                </div>

                <p className="md:text-xl font-semibold">Gym Bag Equipments</p>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-16 h-16 rounded-full flex justify-center items-center bg-neutral">
                  <Image
                    src="/images/WhyChoose/4.png"
                    alt=""
                    className="w-[60%]"
                    width={500}
                    height={500}
                  />
                </div>

                <p className="md:text-xl font-semibold">Fresh Bottle Watter</p>
              </div>
            </div>

            <div className="mt-16">
              <Link href="" className="secondary-btn">
                TAKE A TOUR <BsArrowRightShort />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
