import Link from "next/link";
import logo from "../../../public/images/header_logo.png";
import Image from "next/image";
const Title = () => {
  return (
    <Link href="/">
      <div className="w-40 m-auto">
        <Image src={logo} alt="logo" width="200" height="200" priority className="w-full" />
      </div>
    </Link>
  );
};

export default Title;
