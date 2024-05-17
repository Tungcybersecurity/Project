// Footer.js
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer-form">
      <div className="container">  
        <span style={{color:"white"}}>© 2024 Your Website <br />Người sáng tạo wed : Võ Văn Tuấn & Lê Quang Vinh</span>
        <div className="social-icons">
      <a href="https://www.facebook.com" style={{color:"blue"}}><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://www.youtube.com" style={{color:"red"}}><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="https://www.tiktok.com" style={{color:"black"}}><FontAwesomeIcon icon={faTiktok} /></a>
    </div>
      </div>
    </footer>
  );
}

export default Footer;
