import BackToTop from '../BackToTop/BackToTop.jsx';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <BackToTop />
      <div className="lpCopyright">
        <p className="lpCopyright__text">©Kobunsha Co., Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
