"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { modalActions } from "@/redux/features/modalSlice";
import Input from "../../components/input/Input";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import RadioInput from "@/app/components/input/RadioInput";
import axios from "axios";

const SignUpForm = () => {
  // 상태값 선언
  const dispatch = useAppDispatch();
  // 데이터 가져오는 중인지 확인
  const [isFetching, setIsFetching] = useState(false);
  // 이메일 중복 확인
  const [emailIsDuplicate, setEmailIsDuplicate] = useState(false);
  // debouncing을 위한 setTimeOut ID 저장
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // react-hook-form의 useFrom
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      birth: "",
      gender: "선택안함",
    },
    mode: "onSubmit",
  });

  // 비밀번호 확인을 위해 password 실시간 감시
  const watchPassword = watch("password");
  // 이메일 중복 여부 확인을 위해 password 실시간 감시
  const watchEmail = watch("email");

  // 폼 제출 시 실행 되는 함수(회원가입)
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsFetching(true);
    axios
      .post("/api/register", data, { headers: { "Content-Type": "application/json" } })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  // 이메일 중복 체크 함수
  const checkDuplicate = async (watchEmail: string) => {
    if (watchEmail) {
      const res = await axios.get(`/api/user?email=${watchEmail}`);
      if (res.data) {
        setEmailIsDuplicate(true);
      } else {
        setEmailIsDuplicate(false);
      }
    }
  };

  // 이메일 변경 후 0.5초 지난 후 checkDuplicate 실행
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => checkDuplicate(watchEmail), 500);
    setTimeoutId(id);
  }, [watchEmail]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-11/12 h-fit max-h-90% px-4 py-8 shadow rounded-xl bg-white overflow-auto no-scrollbar sm:w-full sm:max-w-screen-sm sm:px-10"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image alt="Logo" height="200" width="200" priority className="mx-auto w-32 sm:w-40" src="/images/header_logo.png" />
        <h2 className="mt-6 text-center text-2xl sm:text-3xl font-medium tracking-tight text-gray-800">회원가입</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          label="이메일"
          type="email"
          placeholder="example@email.com"
          register={register}
          errors={errors}
          disabled={isFetching}
          required={true}
          isDuplicate={emailIsDuplicate}
        />
        <div className="sm:space-y-0 sm:flex sm:justify-center sm:items-center sm:gap-5">
          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            register={register}
            errors={errors}
            disabled={isFetching}
            required={true}
          />
          <Input
            id="passwordCheck"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호 확인"
            register={register}
            errors={errors}
            disabled={isFetching}
            required={true}
            watchPassword={watchPassword}
          />
        </div>
        <Input id="name" label="이름" type="text" placeholder="이름" register={register} errors={errors} disabled={isFetching} required={true} />
        <div className="sm:space-y-0 sm:flex sm:justify-center sm:items-center sm:gap-5">
          <Input id="phone" label="휴대폰" type="text" placeholder="010-0000-0000" register={register} errors={errors} disabled={isFetching} required={true} />
          <Input id="birth" label="생년월일" type="date" placeholder="생년월일" register={register} errors={errors} disabled={isFetching} required={true} />
        </div>
        <RadioInput id="gender" label="성별" register={register} errors={errors} disabled={isFetching} elements={["선택안함", "남", "여"]} fullWidth={true} />
        <div className="flex gap-8 pt-8">
          <Button type="button" fullWidth={true} gray={true} disabled={isFetching} onClick={() => dispatch(modalActions.CLOSE_MODAL())}>
            취소
          </Button>
          <Button type="submit" fullWidth={true} disabled={isFetching}>
            회원가입
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
