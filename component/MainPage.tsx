import React from "react";

const MainPage = () => {
  return (
    <div className="group">
      <div className="flex flex-col items-center mt-[20rem] text-black gap-4 tracking-wider ">
        <div className=" relative flex flex-col items-center gap-4 tracking-wider">
          <h2 className="text-2xl mt-4">Hear How They Level Up Their Game!</h2>
          <h1 className="text-6xl font-black tracking-tighter">
            Skill <span className="text-[#1DA077]">Masters</span> Unite!🤝
          </h1>
          <h2 className="flex text-2xl font-bold tracking-wide">
            {" "}
            View all Testimonials{" "}
            <span>
              <img src="arrow.png" alt="arrow" className="w-8" />
            </span>
          </h2>
        </div>
        <div className="absolute -mt-30">
          <div className="group">
            <div className="flex gap-10 ml-48 ">
              <img
                src="image.png"
                alt="image"
                className="transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:-translate-y-25 group-hover:-translate-x-25 group-hover:animate-[soft-bounce_2s_ease-in-out_infinite]"
              />
              <img
                src="emoji1.gif"
                alt="image"
                className="w-25 transform -translate-y-15 animate-soft-bounce transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:-translate-y-5"
              />
              <img
                src="image5.png"
                alt="image"
                className="transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:-translate-y-25 group-hover:translate-x-25 group-hover:animate-[soft-opposite-bounce_2s_ease-in-out_infinite]"
              />
            </div>
            <div className="flex ml-2 mt-10 gap-[35rem]">
              <img
                src="image1.png"
                alt="image"
                className="transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:-translate-x-25 group-hover:animate-[soft-bounce_2s_ease-in-out_infinite]"
              />
              <img
                src="image4.png"
                alt="image"
                className="transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:translate-x-25 group-hover:animate-[soft-opposite-bounce_2s_ease-in-out_infinite]"
              />
            </div>
            <div className="flex gap-10 ml-10 mt-4">
              <img
                src="emoji2.gif"
                alt="image"
                className="w-25 animate-soft-bounce transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:-translate-x-15 "
              />
              <img
                src="image2.png"
                alt="image"
                className="transform translate-y-15 transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:translate-y-30 group-hover:-translate-x-20 group-hover:animate-[soft-bounce_2s_ease-in-out_infinite]"
              />
              <img
                src="emoji3.gif"
                alt="image"
                className="w-25 transform translate-y-30 transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:translate-y-55"
              />
              <img
                src="image3.png "
                alt="image"
                className="transform translate-y-15 transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:translate-y-30 group-hover:translate-x-20 group-hover:animate-[soft-opposite-bounce_2s_ease-in-out_infinite]"
              />
              <img
                src="emoji4.gif"
                alt="image"
                className=" w-25 animate-soft-bounce animate-soft-bounce transition-all duration-400 ease-in-out cursor-pointer group-hover:transform group-hover:translate-x-15 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
