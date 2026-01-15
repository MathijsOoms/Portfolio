import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg1 from "../assets/img/BannerFoto.png";
//import headerImg from "../assets/img/yuki.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Mathijs Ooms", "an App Developer", " a Web Designer", "a Sports Enthusiast" ];
  const images = [headerImg1];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const activeIndex = loopNum % images.length;

return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm`}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I'm a third-year Application Development student, passionate about crafting innovative and user-friendly applications. In this portfolio, you'll find an overview of my skills, internship and projects.
                  </p>
                  <button onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/mathijs-ooms-b6b740298/",
                      "_blank",
                      "noopener,noreferrer"
                    )}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="img-wrapper">
                    <div className="img-stack" aria-hidden="true">
                      {images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={idx === activeIndex ? toRotate[activeIndex] : `background-${idx}`}
                          className={idx === activeIndex ? "visible" : ""}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
