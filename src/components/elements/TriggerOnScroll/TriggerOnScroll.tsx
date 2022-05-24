import React, { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Iprops {
  children?: ReactNode;
}

const TriggerOnScroll: FC<Iprops> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-25% 0px",
  });

  return <div ref={ref}>{inView && children}</div>;
};

export default TriggerOnScroll;
