import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function About() {
  return (
    <section className="about_wrap ">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-28">
          <div className="about_card about_card_1">
            <Image
              src="/images/about/progression.png"
              alt=""
              width={500}
              height={500}
            />
            <h2>PROGRESSION</h2>
            <p>
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>

          <div className="about_card about_card_2">
            <Image
              src="/images/about/workout.png"
              alt=""
              width={500}
              height={500}
            />
            <h2>WORKOUT</h2>
            <p>
              With a variety of workouts to choose from, you&apos;ll have
              everything you need to get into the best shape of your life.
            </p>
          </div>

          <div className="about_card about_card_3">
            <Image
              src="/images/about/nutritions.png"
              alt=""
              width={500}
              height={500}
            />
            <h2>NUTRITIONS</h2>
            <p>
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text_bg_red">WHO WE ARE</h2>
              <h2 className="text-4xl mt-6">
                Take Your Health And Body To Next Level
              </h2>
              <p className="mt-4 font-medium text-neutral-content text-sm sm:text-base">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mt-8 sm:text-xl font-bold text-center">
                <div className="sm:border-r border-neutral-content">
                  <Image
                    src="/images/about/pt.png"
                    alt=""
                    className="w-16 mx-auto mb-4"
                    width={500}
                    height={500}
                  />
                  <h1>PROFESSIONAL TRAINERS</h1>
                </div>

                <div className="sm:border-r border-neutral-content">
                  <Image
                    src="/images/about/me.png"
                    alt=""
                    className="w-16 mx-auto mb-4"
                    width={500}
                    height={500}
                  />
                  <h1>MODERN EQUIPMENTS</h1>
                </div>

                <div>
                  <Image
                    src="/images/about/fgm.png"
                    alt=""
                    className="w-16 mx-auto mb-4"
                    width={500}
                    height={500}
                  />
                  <h1>FANCY GYM MACHINES</h1>
                </div>
              </div>

              <div className="mt-16">
                <Link href="" className="secondary-btn">
                  TAKE A TOUR <BsArrowRightShort />
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="about_right_img"></div>
              <div className="about_run_text_img"></div>
              <Image
                src="/images/about/run.png"
                alt=""
                width={500}
                height={500}
                className="z-10 relative ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
