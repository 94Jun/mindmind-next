import Title from "../header/Title";
import SquareButton from "../button/SquareButton";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-gray-600 text-white">
      <div className="flex font-suite justify-center gap-20">
        <section className="self-center shrink-0">
          <Title />
        </section>
        <section className="shrink-0">
          <div className="w-fit m-auto">
            <p className="border-b border-gray-200 pb-2 font-semibold mb-4">고객센터</p>
            <a href="tel:051-710-1489" className="text-3xl font-medium block">
              051-710-1489
            </a>
            <div className="my-2 text-sm">
              <p>운영시간 : 09:00 - 18:00</p>
              <p>휴무 : 일요일 / 공휴일</p>
            </div>
            <div className="flex gap-5 mt-4">
              <SquareButton>1:1 문의</SquareButton>
              <SquareButton>카카오톡 문의</SquareButton>
            </div>
          </div>
        </section>
        <section className="test-sm shrink">
          <div className="w-fit m-auto">
            <p className="border-b border-gray-200 pb-2 font-semibold mb-4">회사 정보</p>
            <div className="text-gray-200">
              <p>(주)마인드마인드</p>
              <p>
                <span>대표 : 정지윤</span>
                <span> | </span>
                <span>사업자등록번호 : 411-87-02043</span>
              </p>
              <p>
                <span>이메일 : mindmind3@naver.com</span>
                <span> | </span>
                <span>팩스 : 051-710-1489</span>
              </p>
              <p>
                <span>주소 : 부산광역시 북구 백양대로 1014, 302호</span>
              </p>
            </div>
          </div>
        </section>
      </div>
      <ul className="flex gap-16 justify-center mt-16 text-sm text-gray-200">
        <li className="cursor-pointer">공지사항</li>
        <li className="cursor-pointer">가맹문의</li>
        <li className="cursor-pointer">이용약관</li>
        <li className="cursor-pointer">개인정보처리방침</li>
        <li className="cursor-pointer">찾아오시는 길</li>
        <li>&copy; MindMind Co. all rights reserved.</li>
      </ul>
    </footer>
  );
};

export default Footer;
