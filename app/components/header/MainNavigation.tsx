import Link from "next/link";

const USER_AUTHORIZATION: number = 0;

interface Link {
  url: string;
  title: string;
  authorization: number;
  same: boolean;
}

const LINK: Link[] = [
  {
    url: "intro",
    title: "소개",
    authorization: 0,
    same: false,
  },
  {
    url: "book",
    title: "예약하기",
    authorization: 0,
    same: false,
  },
  {
    url: "diagnose",
    title: "자가진단",
    authorization: 0,
    same: false,
  },
  {
    url: "mall",
    title: "쇼핑몰",
    authorization: 0,
    same: false,
  },
  {
    url: "login",
    title: "로그인",
    authorization: 0,
    same: true,
  },
  {
    url: "mypage",
    title: "마이페이지",
    authorization: 1,
    same: false,
  },
  {
    url: "manage",
    title: "직원",
    authorization: 2,
    same: false,
  },
  {
    url: "admin",
    title: "관리자",
    authorization: 3,
    same: false,
  },
];

const MainNavigation = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {LINK.map((link) => {
          if ((!link.same && link.authorization <= USER_AUTHORIZATION) || (link.same && link.authorization === USER_AUTHORIZATION)) {
            return (
              <li key={link.title} className="relative w-24 text-center group">
                <Link
                  href={link.url}
                  // className={({ isActive }) =>
                  //   isActive ? "text-orange-400 underline underline-offset-8 w-full block" : "group-hover:text-orange-400 transition w-full block"
                  // }
                >
                  {link.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default MainNavigation;
