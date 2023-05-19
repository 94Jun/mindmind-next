import MainNavigation from "./MainNavigation";
import Title from "./Title";

const Header = () => {
  return (
    <header className="flex items-center font-suite gap-20 p-5 font-semibold text-lg">
      <Title />
      <MainNavigation />
    </header>
  );
};

export default Header;
