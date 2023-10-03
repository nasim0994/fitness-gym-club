import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="contact_wrap">
      <div className="container">
        <h2 className="text-5xl">Need a Fitness Trainer?</h2>
        <h3 className="mt-4 font-bold text-2xl">
          <span className="text-primary">Call</span> : 01706 260 994
        </h3>

        <div className="mt-12">
          <Link href="" className="primary-btn">
            PURCHASE NOW <BsArrowRightShort />
          </Link>
        </div>
      </div>
    </section>
  );
}
