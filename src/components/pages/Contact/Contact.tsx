import React, { useEffect, useState } from "react";
import { useTheme } from "../../../context/themeContext";

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
    </div>
  );
};

export default Contact;
