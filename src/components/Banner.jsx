import Button from "./UI/Button";

const Banner = () => {
  return (
    <section className="w-full h-full">
      <article>
        <div className="w-full h-full flex justify-center items-center relative">
          <img
            src="../image6.jpg"
            className="object-cover w-full h-[700px]"
            alt="banner image"
          />
          {/*   gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/100">
            <div className="flex flex-col justify-center gap-20 items-center w-full h-full">
              <h1 className="font-bold xs:text-2xl md:text-3xl lg:text-5xl">
                Build with{" "}
                <span className="xs:text-2xl  md:text-5xl  lg:text-7xl text-[#f24e3f]">
                  {"{"} Json{" "}
                </span>{" "}
                &
                <span className="xs:text-2xl md:text-5xl lg:text-7xl ms-3 text-[#f7de1e]/90">
                  JavaScript {"}"}
                </span>
              </h1>
              <p className="text-white text-center font-bitcount-regular xs:w-[300px] lg:w-[600px] xs:text-sm lg:text-2xl  mt-4 font-semibold ">
                Define your UI with JSON and add behavior with JavaScript. No
                build tools, no complex frameworks—just a clean, powerful way to
                build web applications.
              </p>
              <Button
                text="Learn more"
                styles="btn xs:btn-sm md:btn-md lg:btn-lg text-white font-semibold px-4 py-2 rounded-md bg-[#f24e3f] hover:bg-[#f24e3f]/70 cursor-pointer transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Banner;
