import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h2 className="text_bg_red mx-auto">GYMAT GALLERY</h2>
          <h2 className="text-4xl mt-4">Our Workplace Gallery</h2>
          <p className="mt-4 w-1/2 mx-auto text-neutral-content">
            Our Workplace Gallery features modern office, team collaboration,
            and fun culture. Attracts talents and showcases company&apos;s work
            atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <div>
            <div>
              <Image
                src="/images/gallery/1.jfif"
                alt=""
                className="w-full h-80 rounded"
                width={500}
                height={500}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Image
                src="/images/gallery/2.jpg"
                alt=""
                className="w-full h-52 rounded"
                width={500}
                height={500}
              />
              <Image
                src="/images/gallery/3.jfif"
                alt=""
                className="w-full h-52 rounded"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/images/gallery/4.jpg"
                alt=""
                className="w-full h-52 rounded"
                width={500}
                height={500}
              />
            </div>
            <div className="mt-4">
              <Image
                src="/images/gallery/5.jpg"
                alt=""
                className="w-full h-80 rounded"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
