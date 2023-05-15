"use client";

import { clsx } from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

interface InputFieldValues {
  [key: string]: string;
}

interface InputProps {
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<InputFieldValues>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  watchPassword?: string;
  icon?: IconType;
  isDuplicate?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, type, register, errors, placeholder, required, disabled, watchPassword, icon: Icon, isDuplicate }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className={clsx(`block text-sm font-medium my-1 text-gray-900`, disabled && "opacity-50")}>
        {label}
      </label>
      <div
        className={clsx(
          `form-input w-full h-12 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 flex justify-center items-center gap-2`,
          errors[id] && "ring-rose-500",
          disabled && "opacity-50 cursor-default"
        )}
      >
        {Icon && (
          <span className="text-xl text-gray-500">
            <Icon fontSize="inherit" color="inherit" />
          </span>
        )}
        <input
          className={clsx(`block w-full h-full py-1 placeholder:text-gray-500 focus:outline-none`, type === "date" && "py-0")}
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id)}
          {...(required === true && register(id, { required: "값을 입력해주세요." }))}
          {...(id === "email" &&
            register(id, {
              required: "이메일을 입력해주세요.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: "올바른 이메일을 입력해주세요." },
              validate: {
                duplicate: () => !isDuplicate || "중복된 이메일입니다.",
              },
            }))}
          {...(id === "password" &&
            register(id, { required: "비밀번호를 입력해주세요.", minLength: { value: 8, message: "비밀번호를 8자리 이상 입력해주세요." } }))}
          {...(id === "phone" &&
            register(id, {
              required: "값을 입력해주세요",
              pattern: { value: /^010-\d{4}-\d{4}$/, message: "010-0000-0000 형식으로 입력해주세요." },
            }))}
          {...(id === "passwordCheck" &&
            register(id, {
              required: "비밀번호 확인이 필요합니다.",
              validate: (value) => value === watchPassword || "비밀번호가 일치하지 않습니다.",
            }))}
        />
      </div>
      <p className="text-sm h-5 mt-1 ml-1 text-red-600">{errors[id]?.message}</p>
    </div>
  );
};

export default Input;
