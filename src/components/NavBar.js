import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/mathijs logo.png';
import logo from '../assets/img/logoMathijs.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/x-social-media-white-icon.svg';
import navIcon3 from '../assets/img/icons8-github.svg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = ['home', 'skills', 'internship', 'projects'];

    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 3; // beetje vooruit kijken
      let current = 'home';

      sections.forEach(section => {
        const elem = document.getElementById(section);
        if (elem) {
          const top = elem.offsetTop;
          const bottom = top + elem.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = section;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', onScroll);

    // initial check
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    // Optioneel: smooth scroll zonder hash verandering
    const elem = document.getElementById(value);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'internship' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('internship')}
              >
                Internship
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/mathijs-ooms-b6b740298/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://x.com/Mathijs_Ooms" target="_blank"><img src={navIcon2} alt="X" /></a>
                <a href="https://github.com/MathijsOoms" target="_blank"><img src={navIcon3} alt="GitHub" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};