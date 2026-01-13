import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/mathijs logo3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/x-social-media-white-icon.svg";
import navIcon3 from "../assets/img/icons8-github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" id="logo" className="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mathijs-ooms-b6b740298/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://x.com/Mathijs_Ooms"><img src={navIcon2} alt="X" /></a>
              <a href="https://github.com/MathijsOoms"><img src={navIcon3} alt="GitHub" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
