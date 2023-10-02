import Image from "next/image";

export default function FeaturedClass() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text_bg_red mx-auto">OUR FEATURED CLASS</h2>
          <h2 className="text-4xl mt-5">
            We Are Offering Best Flexible Classes
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 featured_class_card">
              <div className="featured_class featured_class_1"></div>
              <div className="class_icon">
                <Image
                  src="/images/about/pt.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
                <h2 className="text-3xl mb-4">Cycling</h2>
                <p className="bg-primary px-3 py-2 inline text-[15px]">
                  Wednesday: 9:00am-10:00am
                </p>
              </div>
            </div>

            <div className="featured_class_card">
              <div className="featured_class featured_class_2"></div>
              <div className="class_icon">
                <Image
                  src="/images/about/pt.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
                <h2 className="text-3xl mb-4">Karate</h2>
                <p className="bg-primary px-3 py-2 inline text-[15px]">
                  Friday: 10:00am-11:00am
                </p>
              </div>
            </div>

            <div className="featured_class_card">
              <div className="featured_class featured_class_3"></div>
              <div className="class_icon">
                <Image
                  src="/images/about/pt.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
                <h2 className="text-3xl mb-4">Power</h2>
                <p className="bg-primary px-3 py-2 inline text-[15px]">
                  Saturday: 9:00am-10:00am
                </p>
              </div>
            </div>

            <div className="featured_class_card">
              <div className="featured_class featured_class_4"></div>
              <div className="class_icon">
                <Image
                  src="/images/about/pt.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
                <h2 className="text-3xl mb-4">Meditation</h2>
                <p className="bg-primary px-3 py-2 inline text-[15px]">
                  Friday: 1:00pm-2:00pm
                </p>
              </div>
            </div>

            <div className="featured_class_card">
              <div className="featured_class featured_class_5"></div>
              <div className="class_icon">
                <Image
                  src="/images/about/pt.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
                <h2 className="text-3xl mb-4">Martial Arts</h2>
                <p className="bg-primary px-3 py-2 inline text-[15px]">
                  Sunday: 6:00pm-7:00pm
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 featured_class_card">
              <div className="featured_class featured_class_6"></div>
              <div className="class_icon">
                <Image
                  src="/images/about/pt.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>

              <div className="z-30 absolute bottom-6 left-4 text-start text-base-100">
                <h2 className="text-3xl mb-4">Workout</h2>
                <p className="bg-primary px-3 py-2 inline text-[15px]">
                  Monday: 4:00pm-5:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
