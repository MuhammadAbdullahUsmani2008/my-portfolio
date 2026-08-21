import { FaHeart, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div>
        <a href="#home" className="footer-logo">
          Usmani<span>.</span>
        </a>

        <p>
          Designed and built with <FaHeart /> using React.
        </p>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Muhammad Abdullah Usmani.
        All rights reserved.
      </p>

      <button
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;