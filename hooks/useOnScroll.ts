import { useEffect, useState } from "react";

export const useOnScroll = () => {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const menuControl = () => {
    if (typeof window !== undefined && window.innerWidth < 640) {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    if (typeof window !== undefined && window.innerWidth < 640) {
      window.addEventListener("scroll", menuControl);

      return () => {
        window.removeEventListener("scroll", menuControl);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return {
    show,
  };
};
