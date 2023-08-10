import React from "react";
import backgroundPicture from "../assets/logolight2.png";
import img from "../assets/AdobeStock_5564508331.png";
import logo from "../assets/logo-light1.png";

const Main = () => {
  return (
    <div style={{ background: `url(${backgroundPicture})` }}>
      <div className="w-[90%] ml-auto flex justify-center items-center [&>div]:w-[50%]">
        <div className="w-[50%] ">
          <img src={`${logo}`} alt="Logo" />
          <h1 className="text-[#7c824c] text-[6rem] text font-bold">
            Coming Soon
          </h1>
          <p className="text-[#B0B0B0] text-[1.4rem]">
            if you want to be notified when the webpage goes live.
          </p>
          <p className="text-[#B0B0B0] text-[1.4rem]">
            please subscrite to our mailing list
          </p>
          <form action="">
            <input
              className="px-[9rem] py-[0.7rem] shadow-md "
              type="text"
              placeholder="Your mail here"
            />
            <button className="bg-[#7c824c] py-[0.7rem] px-[0.5rem] text-white rounded">
              Subscripe
            </button>
          </form>
        </div>
        <div>
          <img src={`${img}`} alt="Picture of flowers" />
        </div>
      </div>
    </div>
  );
};

export default Main;
