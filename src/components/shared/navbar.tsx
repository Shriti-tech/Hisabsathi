import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./logo";
import { NavmenuItems, MobileNavmenuItems } from "../../constants/navitems";
import useMobile from "@/hooks/useMobile";

const NavContent = ({ closeSheet }: { closeSheet?: () => void }) => {
  return (
    <div className="flex h-full flex-col gap-5 pt-5 font-outfit">
      {MobileNavmenuItems.map((item, index) => (
        <ul key={index}>
          <li>
            <SheetClose asChild>
              <NavLink
                to={item.path}
                className="text-lg font-medium text-input"
                onClick={closeSheet}
              >
                {item.title}
              </NavLink>
            </SheetClose>
          </li>
        </ul>
      ))}
    </div>
  );
};

const NavigationMenuDropDown = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();

    if (to.startsWith("#")) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex items-center space-x-4 lg:space-x-8">
      {NavmenuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          onClick={(e) => handleClick(e, item.path)}
          className="text-base font-medium text-input transition-colors whitespace-nowrap"
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

const Navbar = () => {
  const isMobile = useMobile();

  return (
    <nav className="w-full h-16 sm:h-20 flex items-center font-outfit px-4 sm:px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-74 bg-background fixed top-0 z-50">
      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        {!isMobile ? (
          <>
            <NavigationMenuDropDown />
            <Button
              className="font-medium bg-white border-2 border-[#D9D9D9] bg-[#F2F2F2] rounded-xl text-sm lg:text-base px-3 py-5 whitespace-nowrap shadow"
              variant="outline"
              asChild
            >
              <Link to="/">Login to portal</Link>
            </Button>
          </>
        ) : (
          <div className="flex-shrink-0">
            <Sheet>
              <SheetTrigger asChild>
                <AlignJustify className="size-6 shrink-0 cursor-pointer" />
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-white border-none flex flex-col gap-2 w-[280px] sm:w-[320px] max-w-[80vw]"
              >
                <div className="flex flex-col space-y-10">
                  <Logo />
                  <NavContent />
                  <SheetClose asChild>
                    <Button
                      className="font-medium cursor-pointer text-input bg-primary text-white"
                      asChild
                    >
                      <Link to="/">Login to portal</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
