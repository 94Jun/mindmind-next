"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputFieldValues {
  [key: string]: string;
}

interface RadioInputProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<InputFieldValues>;
  disabled?: boolean;
  elements: string[];
  fullWidth?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({ id, label, register, errors, disabled, elements, fullWidth }) => {
  return (
    <div>
      <p className={clsx(`block text-sm font-medium my-1 text-gray-900`, disabled && "opacity-50")}>{label}</p>
      <div className="flex gap-2">
        {elements.map((el, idx) => {
          return (
            <div key={el} className={clsx(fullWidth && "w-full")}>
              <input
                type="radio"
                value={el}
                id={id + idx}
                className="hidden peer"
                disabled = {disabled}
                defaultChecked={idx === 0 ? true : false}
                {...register(id, { required: true })}
              />
              <label
                htmlFor={id + idx}
                className={clsx(
                  `flex justify-center items-center rounded-sm px-3 py-2 text-md tracking-wider ring-1 ring-inset ring-gray-300 peer-checked:bg-orange-100`,
                  fullWidth && "w-full",
                  !disabled && "cursor-pointer hover:bg-orange-100",
                  disabled && "opacity-50"
                )}
              >
                {el}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioInput;
