import { useState, useEffect } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
};

export default useMobile;
