import Image from "next/image";
import SignInForm from "../components/SignInForm";
const login = () => {
  return (
    <div className="w-full h-full relative flex flex-col justify-center sm:flex-row sm:items-center sm:bg-login sm:bg-cover sm:bg-center">
      <div className="w-full sm:w-1/2 ">
        <div className="absolute top-8 left-8">
          <Image alt="Logo" height="100" width="100" priority className="w-32" src="/images/header_logo.png" />
        </div>
        <SignInForm />
      </div>
      <div className="w-full sm:w-1/2"></div>
    </div>
  );
};

export default login;