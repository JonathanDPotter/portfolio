import React, { FC, ReactNode } from "react";
import "./Subject.scss";

interface Iprops {
  children ?: ReactNode;
}

const Subject: FC<Iprops> = ({children}) => {
  return <div className="container">
    <div className="content">
      {children}
    </div>
  </div>;
};

export default Subject;
