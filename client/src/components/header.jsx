import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className="bg-info text-dark mb-4 align-center w-100 display-flex"
      style={{
        height: scrolled ? "60px" : "auto",
        position: scrolled ? "fixed" : "relative",
        top: scrolled ? "0px" : "auto",
      }}
    >
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1
            className="m-0"
            style={{
              fontSize: scrolled ? "1.5rem" : "3rem",
            }}
          >
            Taking Stock
          </h1>
        </Link>
        <p
          className="m-0"
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            display: scrolled ? "none" : "block",
          }}
        >
          Take the market for a ride
        </p>
      </div>
      <div className="header-right">
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
