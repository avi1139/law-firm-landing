import React from "react";
import styles from "./navbar.module.css";
import navlogo from "../../assets/navlogo.svg";

const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <img src={navlogo} alt="navbarlogo" />
      </div>
      <div className={styles.middle}>
        <h4>Home</h4>
        <h4>Attorneys</h4>
        <h4>Practise Areas</h4>
        <h4>About Us</h4>
      </div>
      <button>Contact Now</button>
    </nav>
  );
};

export default navbar;
