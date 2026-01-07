import { Link, useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = (e: any, to: string) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <Link
      className="w-full h-full flex items-center"
      to="/"
      onClick={(e) => handleClick(e, "/")}
    >
      <img
        src="/Logo.svg"
        alt="logo"
        loading="lazy"
        className="w-32  md:w-40 lg:w-44 h-auto"
      />
    </Link>
  );
};

export default Logo;
