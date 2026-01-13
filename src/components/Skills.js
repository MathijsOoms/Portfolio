// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import meter60 from "../assets/img/60.svg";
import meter65 from "../assets/img/65.svg";
import meter70 from "../assets/img/70.svg";
import meter75 from "../assets/img/75.svg";
import meter80 from "../assets/img/80.svg";
import meter85 from "../assets/img/85.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"
import colorSharp from "../assets/img/mathijs vlek achtergrond2.png"
import cv from "../assets/img/MathijsOomsCV.pdf"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Through projects and hands-on experience, I have developed strong problem-solving skills and a keen eye for clean, maintainable code. I am always eager to learn new technologies and improve my expertise in both frontend and backend development.</p>
                        <p className="bottom-text">This is an overview of my learned programming languages and their percentage of knowledge.</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000} transitionDuration={1000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter85} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} className="meter60" alt="Image" />
                                <h5>.NET</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter65} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="Image" />
                                <h5>Python</h5>
                            </div>
                        </Carousel>
                        <div>
                          <span className="tagline">
                            <a href={cv} download="MathijsOomsCV">Download CV</a>
                          </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
