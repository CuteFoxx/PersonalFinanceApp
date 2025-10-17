import Logo from "../assets/logo-large.svg?react";
import HomeIcon from "../assets/icon-nav-overview.svg?react";
import PotsIcon from "../assets/icon-nav-pots.svg?react";
import SideBardLink from "./SideBardLink";

const Sidebar = () => {
  return (
    <header className="bg-grey-900 text-white fixed bottom-0 w-full px-4 pt-2 rounded-t-lg xl:static xl:flex xl:flex-col xl:rounded-t-[0] xl:!rounded-r-2xl xl:py-10 xl:pl-8 xl:pr-6">
      <Logo className="hidden xl:flex mb-16" />
      <div className="flex xl:flex-col xl:gap-1">
        <SideBardLink to="/" linkText="Overview">
          <HomeIcon />
        </SideBardLink>
        <SideBardLink to="/pots" linkText="Pots">
          <PotsIcon />
        </SideBardLink>
      </div>
    </header>
  );
};

export default Sidebar;
