import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./logo";
import { NavmenuItems, MobileNavmenuItems } from "../../constants/navitems";

const NavContent = ({ closeSheet }: { closeSheet?: () => void }) => {
  return (
    <div className="flex h-full flex-col gap-5 pt-5 font-outfit">
      {MobileNavmenuItems.map((item, index) => (
        <ul key={index}>
          <li>
            <SheetClose asChild>
              <NavLink
                to={item.path}
                className="text-lg font-medium text-gray-700 hover:text-gray-900 transition"
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
    <div className="hidden md:flex items-center space-x-8">
      {NavmenuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          onClick={(e) => handleClick(e, item.path)}
          className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};
const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center font-outfit px-5 md:px-10 lg:px-14 2xl:px-64 bg-[#FAFBFF] fixed top-0 z-50">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Desktop Navigation Menu */}
        <NavigationMenuDropDown />

        {/* Login Button - Desktop */}
        <Button
          className="font-medium hidden md:flex bg-white border border-gray-300 text-gray-700 bg-[#F2F2F2] rounded-md"
          variant="outline"
          asChild
        >
          <Link to="/login">Login to portal</Link>
        </Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <AlignJustify className="size-6 shrink-0 cursor-pointer" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-white border-none flex flex-col gap-2 max-w-[80vw]"
            >
              <div className="flex flex-col space-y-10">
                <Logo />
                <NavContent />
                <SheetClose asChild>
                  <Button className="font-medium cursor-pointer" asChild>
                    <Link to="/login">Login to portal</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
