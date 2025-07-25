import Button from "./UI/Button";
import Card from "./UI/Card";
import { GiPadlock } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";

const MainContent = () => {
  return (
    <main className="w-full h-full xs:px-10 lg:px-30 mt-12 flex flex-col justify-between gap-30 ">
      <div className="w-full h-auto  flex xs:flex-col lg:flex-row  justify-between gap-10  items-center ">
        <div className="xs:w-full xs:h-auto  lg:w-[50%] lg:h-[400px] border-1 border-gray-500/50 rounded-md xs:overflow-y-hidden lg:overflow-y-scroll ">
          <img
            src="../jsonImage.png"
            alt="image"
            className="object-cover rounded-md"
          />
        </div>
        <div className="xs:w-full xs:h-auto lg:w-[50%] text-center h-auto flex flex-col xs:justify-between lg:justify-center gap-10 items-center">
          <h2 className="xs:text-1xl  lg:text-4xl font-bold ">
            The Coding Agent For Developers and Non-Developers
          </h2>
          <p className=" xs:w-auto xs:h-auto  xs:text-xs  lg:text-md lg:w-[300px] lg:h-auto  flex flex-col font-bitcount-medium  text-gray-400">
            <span className="text-start xs:text-md lg:text-4xl text-[#f24e3f]/75 ">
              {"{"}
            </span>
            <br />
            {'"Build" :'}{" "}
            {`"complete applications with just JSON. No build tools, no
            bundlers, no waiting"`}
            <span className="text-start xs:text-md lg:text-4xl text-[#f24e3f]/75">{"}"}</span>
          </p>
          <div className="w-full flex xs:justify-center lg:justify-end lg:me-14 mt-4">
            <Button
              text="Learn more"
              styles="btn btn-sm text-gray-300 font-bold px-4 py-2 rounded-md bg-[#f24e3f] hover:bg-[#f24e3f]/70 cursor-pointer transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Card section */}
      <div className="w-full h-auto flex xs:flex-col  lg:flex-row justify-between xs:gap-10 lg:gap-20 ">
        <Card
          title="Secure and private"
          icon={<GiPadlock />}
          text="Sign in with Google and securely store your app’s data—no setup required. User auth and real-time storage work out of the box."
        />
        <Card
          title="Fast and efficient"
          icon={<FaRocket />}
          text="Describe what you want and our AI generates the UI and logic."
        />
        <Card
          title="Easy to use"
          icon={<FaCodePullRequest />}
          text="Changes appear instantly. No refresh needed. Real-time collaboration."
        />
      </div>

      {/* third section */}
      <div className="carousel w-full h-[400px]  rounded-lg">
        {/* slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="
            flex flex-col justify-center items-center
            text-white text-2xl font-bitcount-regular xs:w-[290px] xs:h-[250px]  lg:w-full  lg:h-[350px] xs:p-10 lg:p-0 rounded-lg
            text-center bg-gradient-to-r from-[#f24e3f]/15 via-gray-900/30 to-black/90"
            >
              <h3 className="xs:text-xs lg:w-[80%]">
                Buildess enables us not only to optimize productivity through
                the use of advanced technology but also to ensure our safety at
                all times.
              </h3>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full h-full flex justify-center items-center">
            <div
              className="
            flex flex-col justify-center items-center
            text-white text-2xl font-bitcount-regular xs:w-[290px] xs:h-[250px]  lg:w-full  lg:h-[350px] rounded-lg
            text-center bg-gradient-to-r from-[#f24e3f]/15 via-gray-900/30 to-black/90"
            >
              <h3 className="xs:text-xs lg:w-[80%]">
                Buildess' value lies in empowering developers, including those
                with little development experience, to excel by alleviating the
                burden of repetitive tasks.
              </h3>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
