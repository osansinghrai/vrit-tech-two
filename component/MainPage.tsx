import React from "react";

const MainPage = () => {
  return (
    <div className="relative">
      <div className="relative flex flex-col items-center mt-[20rem] min-h-screen text-black gap-4 tracking-wider ">
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
        <div className="absolute -mt-30">
          <div>
            <div className="flex gap-10 ml-45">
              <img src="image.png" alt="image" />
              <img
                src="emoji1.gif"
                alt="image"
                className="w-25 transform -translate-y-15 animate-soft-bounce"
              />
              <img src="image5.png" alt="image" />
            </div>
            <div className="flex ml-2 mt-10 gap-[35rem]">
              <img src="image1.png" alt="image" />
              <img src="image4.png" alt="image" />
            </div>
            <div className="flex gap-10 ml-20 mt-4">
              <img
                src="emoji2.gif"
                alt="image"
                className="w-25 animate-soft-bounce"
              />
              <img
                src="image2.png"
                alt="image"
                className="transform translate-y-15"
              />
              <img
                src="emoji3.gif"
                alt="image"
                className="w-25 transform translate-y-30"
              />
              <img
                src="image3.png "
                alt="image"
                className="transform translate-y-15"
              />
              <img
                src="emoji4.gif"
                alt="image"
                className=" w-25 animate-soft-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
