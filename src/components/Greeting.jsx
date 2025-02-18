import React from "react";
import Morning from "../assets/day.svg";
import Evening from "../assets/evening.svg";
import Night from "../assets/night.svg";

const Greeting = () => {
  const getCurrentTime = () => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return {
        image: Morning,
        text: "Good Morning!",
      };
    } else if (hour >= 12 && hour < 17) {
      return {
        image: Afternoon,
        text: "Good Afternoon!",
      };
    } else if (hour >= 17 && hour < 21) {
      return {
        image: Evening,
        text: "Good Evening!",
      };
    } else {
      return {
        image: Night,
        text: "Good Night!",
      };
    }
  };

  const { image, text } = getCurrentTime();

  return (
    <h1 className="flex items-center font-bold text-xl m-8">
      <img src={image} alt="Time of day" className="w-[50px]" />
      {text}
    </h1>
  );
};

export default Greeting;
