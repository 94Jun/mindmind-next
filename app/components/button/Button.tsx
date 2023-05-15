"use client";

import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  gray?: boolean;
}
const Button: React.FC<ButtonProps> = ({ children, type, fullWidth, onClick, disabled, gray }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `flex justify-center items-center rounded-md px-3 py-2 text-md font-semibold text-white tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        fullWidth && "w-full",
        !gray && "bg-orange-400",
        gray && "bg-gray-400",
        !disabled && !gray && "hover:bg-orange-500",
        !disabled && gray && "hover:bg-gray-500",
        disabled && "opacity-50 cursor-default"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
