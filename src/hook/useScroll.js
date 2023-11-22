import { useState, useEffect } from "react";

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState();

  useEffect(() => {
    const listener = (e) => {
      const bodyOffset = document.body.getBoundingClientRect();
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
      setLastScrollTop(-bodyOffset.top);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", listener);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", listener);
      }
    };
  }, [lastScrollTop]);

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
