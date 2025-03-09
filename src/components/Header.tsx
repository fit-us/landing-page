import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="pt-12 pl-[70px]">
      <div className="flex items-center gap-8">
        <img src={logo} alt="logo" height="65" width="95" />
        <div className="w-11/12 border-2 border-main relative after:absolute after:right-1 after:top-[-8px] after:h-4 after:border-r-2 after:border-main" />
      </div>
    </div>
  );
};

export default Header;
