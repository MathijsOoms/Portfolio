import React, { useState, useEffect, useRef } from "react";
import { Container, Tab } from "react-bootstrap";
import f1Car from "../assets/img/vcarb.png";
// import finishLine from "../assets/img/finishflag.png";
import finishLine from "../assets/img/finish.png";
import dartsBoard from "../assets/img/dartbord.png";
import footballBall from "../assets/img/voetbal.png";
import goal from "../assets/img/goal.png";
import dartPijl from "../assets/img/dart.png";
import yuki1 from "../assets/img/yuki1.png";
import jonny from "../assets/img/jonny.png";
import ronaldo from "../assets/img/ronaldo.png";

export const Interests = () => {
  const interests = ["F1", "Darts", "Football"];
  const [activeTab, setActiveTab] = useState(0);
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Toegevoegd om te controleren of er geklikt is
  const maxPosition = 93;
  const isDragging = useRef(false);
  const sliderRef = useRef(null);

  const images = [f1Car, dartPijl, footballBall];
  const finishImages = [finishLine, dartsBoard, goal];

  const getMaxPosition = () => {
    if (activeTab === 1) {
      return 89;
    } if (activeTab === 0) {
      return 89;
    } else {
      return 91;
    }
  };

  useEffect(() => {
    if (!isDragging.current && !isPaused) {
      const interval = setInterval(() => {
        setPosition((prev) => {
          const maxPosition = getMaxPosition();
          if (prev >= maxPosition) {
            setActiveTab((prevTab) => (prevTab + 1) % interests.length);
            return 0;
          }
          return prev + 1;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isPaused, activeTab]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    setIsPaused(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !sliderRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const containerWidth = sliderRect.width;
    const newPosition = ((e.clientX - sliderRect.left) / containerWidth) * 100;

    // Zorg ervoor dat de slider stopt 20px van het einde
    const maxPositionAdjusted = (containerWidth - 20) / containerWidth * 100; // 20px minder dan het einde
    setPosition(Math.max(0, Math.min(newPosition, maxPositionAdjusted)));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    setIsPaused(false);

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleSliderClick = () => {
    if (isClicked) {
      setIsPaused(false); // Start de animatie opnieuw
    } else {
      setIsPaused(true); // Pauzeer de animatie
    }
    setIsClicked((prevState) => !prevState); // Toggle tussen klikken en niet klikken
  };

  // Snellere rotatie voor de voetbal (bijv. *1.5 voor snellere rotatie)
  const rotation = activeTab === 2 ? (position / maxPosition) * 540 : 0;  // Snellere rotatie

  return (
    <section className="interests" id="interests">
      <Container className="interests-container">
        <h2>Interests</h2>
        <Tab.Container activeKey={activeTab}>
          {/* <Nav variant="tabs" className="justify-content-center">
            {interests.map((interest, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={index} active={activeTab === index} onClick={() => handleTabChange(index)}>
                  {interest}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav> */}
          <Tab.Content>
            <Tab.Pane eventKey={0} className="text-center">
              <p>Formula 1 is the pinnacle of motorsport, featuring high-speed racing, cutting-edge technology, and thrilling competition between the best drivers in the world. The strategy, speed, and skill required make F1 an adrenaline-pumping experience for fans around the globe!</p>
              <div className="favourite">
                <div className="text-left">
                  <h4>My Favorite F1 Driver: Yuki Tsunoda</h4>
                  <p>Yuki Tsunoda is an exciting young driver in Formula 1, known for his aggressive racing style and impressive performances. I'm a huge fan of his determination and passion! Last year Yuki had his best season with his best qualifying position of 3th and his best position in the driver standings of 12th.</p>
                </div>
                <div className="card">
                  <div className="card-content">
                    <img src={yuki1} alt="Yuki Tsunoda"></img>
                    <div className="info">
                      <p>Place of birth: Sagamihara, Japan</p>
                      <p>Birthdate: May 11, 2000</p>
                      <p>Age: 24 years old</p>
                      <p>F1 Debut: Bahrain 2021</p>
                      <p>F1 Career<br />
                        2021-2022: AlphaTauri<br />
                        2023-2025: VCARB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={1} className="text-center">
              <p>Darts is a game of precision, concentration, and mental strength. It's thrilling to watch and to play. The excitement builds with every perfect throw, and the energy from the crowd adds to the drama of the game. Whether you're playing or watching, darts brings a unique mix of skill and excitement!</p>
              <div className="favourite">
                <div className="text-left">
                  <h4>My Favorite Darts Player: Jonny Clayton</h4>
                  <p>Jonny Clayton is one of the most dynamic players in the world of darts. Known for his explosive playing style and ability to handle pressure, Jonny has become a fan favorite in recent years. His impressive achievements include winning the 2021 Premier League Darts. His consistency and focus make him a formidable opponent, and his victories are always exciting to watch!</p>
                </div>
                <div className="card">
                  <div className="card-content">
                    <img src={jonny} alt="Jonny Clayton" />
                    <div className="info">
                      <p>Place of birth: Llanelli, Wales</p>
                      <p>Birthdate: October 4, 1974</p>
                      <p>Age: 50 years old</p>
                      <p>Nickname: The Ferret</p>
                      <p>Career Highlights:<br />
                        2021 Premier League Darts Winner<br />
                        2x World Cup of Darts Champion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={2} className="text-center">
            <p>Football is one of the most popular and exhilarating sports in the world. The thrill of the game, the team spirit, and the excitement of scoring goals make football truly special. Whether it's the top leagues, international tournaments, or local matches, football never fails to captivate fans worldwide.</p>
            <div className="favourite">
              <div className="text-left">
                <h4>My Favorite Football Player: Cristiano Ronaldo</h4>
                <p>Cristiano Ronaldo is widely regarded as one of the greatest football players of all time. Known for his exceptional skills, work ethic, and incredible goal-scoring abilities, Ronaldo has built a legendary career with numerous records and trophies. From his early days at Sporting CP to his iconic stints at Manchester United, Real Madrid, Juventus, and now Al Nassr.</p>
                </div>
                  <div className="card">
                    <div className="card-content">
                      <img src={ronaldo} alt="Cristiano Ronaldo" />
                      <div className="info">
                        <p>Place of birth: Madeira, Portugal</p>
                        <p>Birthdate: February 5, 1985</p>
                        <p>Age: 39 years old</p>
                        <p>Career Highlights:<br />
                          5x Ballon d'Or Winner<br />
                          4x European Golden Shoe Winner<br />
                          5x Champions League Winner<br />
                          Euro 2016 Winner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        {/* Slider */}
        <div className="slider-container" ref={sliderRef} onDoubleClick={handleSliderClick}>
          <img
            src={images[activeTab]}
            alt={interests[activeTab]}
            className="slider-item"
            style={{
              left: `${position}%`,
              cursor: "grab",
              transform: `rotate(${rotation}deg)`,
              zIndex: activeTab === 2 || activeTab === 1 ? 2 : 1,
            }}
            onMouseDown={handleMouseDown}
            onDragStart={(e) => e.preventDefault()}
          />
          <img 
            src={finishImages[activeTab]} alt="Finish" 
            className="finish-line" 
            style={{
              zIndex: activeTab === 2 || activeTab === 1 ? 1 : 0,
            }}
          />
        </div>
      </Container>
    </section>
  );
};