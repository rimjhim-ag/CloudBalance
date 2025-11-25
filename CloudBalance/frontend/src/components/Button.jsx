import React from "react";

const Button = ({
  children,
  event,
  variant = "primary",
  color = "#0a3ca2",
  padding = "px-3 py-2",
  margin = "m-5",
}) => {
  let buttonColor = "";

  switch (variant) {
    case "primary":
      buttonColor = `border border-[${color}] text-[${color}]`;
      break;

    case "secondary":
      buttonColor = "bg-[#898a90] text-white";
      break;

    case "filled":
      buttonColor = `bg-[${color}] text-white`;
      break;

    default:
      buttonColor = "";
  }

  return (
    <button
      onClick={event}
      className={`${buttonColor} ${padding} font-bold rounded-sm ${margin} flex items-center gap-2 cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
