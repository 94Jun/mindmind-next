"use client";

import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { BiKey } from "react-icons/bi";
import { useState } from "react";
import Input from "../../components/input/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../../components/button/Button";
import { useAppSelector } from "../../../redux/hooks";
import { useAppDispatch } from "../../../redux/hooks";
import { modalActions } from "../../../redux/features/modalSlice";
import Modal from "../../components/modal/Modal";
import clsx from "clsx";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  // 상태값 선언
  const dispatch = useAppDispatch();
  // 회원가입 모달 상태 관리를 위한 state 선언
  const activeModal = useAppSelector((state) => state.modal.activeModal);
  const [isFetching, setIsFetching] = useState(false);

  // react-hook-form의 useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  // 폼 제출 시 실행 되는 함수(credentials auth)
  // 추가 구현 필요
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsFetching(true);
    signIn("credentials", { ...data, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          console.error("Invalid credentails");
        }
        if (callback?.ok && !callback?.error) {
          console.log("Logged in!");
        }
      })
      .finally(() => setIsFetching(false));
  };

  // 소셜 로그인 클릭 시 실행되는 함수(provider auth)
  // 구현 필요
  const socialAction = (action: string) => {
    setIsFetching(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        // if (callback?.error) {
        //   console.error("error");
        // }
        // if (callback?.ok && !callback?.error) {
        //   console.log("login");
        // }
      })
      .finally(() => setIsFetching(false));
  };

  return (
    <div className="w-10/12 mx-auto max-w-sm mt-4">
      <h2 className="font-medium text-3xl mb-4">Sign in</h2>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          label="이메일"
          type="email"
          placeholder="이메일 주소를 입력해주세요."
          register={register}
          errors={errors}
          disabled={isFetching}
          icon={CiMail}
        />
        <Input
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          register={register}
          errors={errors}
          disabled={isFetching}
          icon={BiKey}
        />
        <Button type="submit" fullWidth={true} disabled={isFetching}>
          로그인
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <button
            className={clsx(
              `flex justify-center items-center w-full shadow-sm ring-1 ring-inset ring-gray-300 gap-4 rounded-md py-2 hover:shadow`,
              isFetching && "opacity-50 cursor-default"
            )}
            onClick={() => socialAction("google")}
            disabled={isFetching}
          >
            <span className="text-2xl flex justify-center items-center">
              <FcGoogle fontSize="inherit" />
            </span>
            <span className="text-gray-600 text-md">sign in with google</span>
          </button>
          <button
            className={clsx(
              `flex bg-yellow-300 justify-center items-center w-full shadow-sm shadow-yellow-300 gap-4 rounded-md py-2 hover:shadow`,
              isFetching && "opacity-50 cursor-default"
            )}
            onClick={() => socialAction("kakao")}
            disabled={isFetching}
          >
            <span className="text-2xl flex justify-center items-center">
              <RiKakaoTalkFill fontSize="inherit" />
            </span>
            <span className="text-gray-900 text-md">sign in with kakao</span>
          </button>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>아직 계정이 없으신가요?</div>
          <div className="underline cursor-pointer" onClick={() => dispatch(modalActions.OPEN_MODAL("signUp"))}>
            회원가입
          </div>
        </div>
      </div>
      {activeModal && <Modal />}
    </div>
  );
};

export default SignInForm;
