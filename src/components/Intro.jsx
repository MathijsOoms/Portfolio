import { useEffect, useState } from "react";

export const Intro = () => {
  const [fade, setFade] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Scrollen tijdelijk uitschakelen
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setFade(true);

      // na 0.5s fade-out de component verwijderen en scrollen terugzetten
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "auto";
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // fallback bij unmount
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro-screen ${fade ? "fade" : ""}`}>
      <div className={`name-intro ${fade ? "shrink" : ""}`}>
        <div className="ooms ooms-top">OOMS</div>
        <div className="mathijs">MATHIJS</div>
        <div className="ooms ooms-bottom">OOMS</div>
      </div>
    </div>
  );
};