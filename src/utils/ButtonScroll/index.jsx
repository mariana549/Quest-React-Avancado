import { Button } from "./buttonStyled";
import up from "../../assets/image/seta-para-cima.png";
import down from "../../assets/image/seta-para-baixo.png";
import { useState } from "react";

export function ButtonScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const handleButtonCLick = () => {
    if (isTop) {
      setScrollPosition(window.scrollY);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsTop(false);
    } else {
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      setIsTop(true);
    }
  };

  return (
    <Button onClick={handleButtonCLick}>
      <img
        src={isTop ? up : down}
        alt={`Button go ${isTop ? "up" : "down"} to`}
      />
    </Button>
  );
}
