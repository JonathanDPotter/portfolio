import React, { useEffect, useState } from "react";
import { useTheme } from "../../../context/themeContext";
import "./Contact.scss"; 

const Contact = () => {
  const { theme } = useTheme();
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={fade ? "contact page fade" : "contact page"}
      data-theme={theme}
    >
      <h2>Contact</h2>
      <div className="content">
        <p>You can e-mail me at <a href="mailto:jonathan.d.potter@outlook.com">jonathan.d.potter@outlook.com</a></p>
        <h3></h3>
      </div>
    </div>
  );
};

export default Contact;
