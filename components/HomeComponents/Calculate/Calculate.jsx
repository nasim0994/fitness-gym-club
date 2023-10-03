export default function Calculate() {
  return (
    <section className="calculate_wrap">
      <div className="container">
        <div className="md:w-2/5">
          <h2 className="text-4xl">
            Let&apos;s Calculate Your <span className="text-primary">BMI</span>
          </h2>

          <p className="opacity-80 mt-4 ">
            Easily determine your body mass index with our accurate calculation
            tool.
          </p>

          <form className="mt-10">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="weight"
                className="w-full outline-none border px-4 py-2.5 rounded bg-transparent"
                placeholder="weight / KG"
              />

              <input
                type="text"
                name="height"
                className="w-full outline-none border px-4 py-2.5 rounded bg-transparent"
                placeholder="Height / cm"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-6">
              <h5>
                Your BMI is:
                <span className="text-primary"></span>
              </h5>

              <h5>
                Your weight is:
                <span className="text-primary"></span>
              </h5>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-neutral px-6 py-3 rounded hover:bg-primary duration-300"
              >
                CALCULATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
