import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <div className="logo">AE</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/angie-elsegeiny-b97013263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src={navIcon1} alt="LinkedIn Profile" /></a>
                <a href="https://www.facebook.com/profile.php?id=100086022013419&mibextid=LQQJ4d" target="_blank"><img src={navIcon2} alt="FaceBook Profile" /></a>
                <a href="https://www.instagram.com/theangieelsegeiny/profilecard/?igsh=MmRic2dudHJyb3hj" target="_blank"><img src={navIcon3} alt="Instagram Profile" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
