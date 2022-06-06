import React, { useEffect, useState } from "react";

const Contact = () => {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div className={fade ? "contact page fade" : "contact page"}>
      <h2>Contact</h2>
    </div>
  );
};

export default Contact;
