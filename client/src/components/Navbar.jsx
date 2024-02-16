import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import msg from "../assets/msg-icon.png";
import close from "../assets/close.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <header id="header">
        <div id="header-wrap">
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                KATZEN❤️
              </Link>
              <span onClick={handleClick}>
                <img src={click ? close : msg}></img>
              </span>
            </div>
          </nav>
        </div>
      </header>
      <div className="msg-container">
        <div className={click ? "msg-active" : "msg-close"}>
          <h1>Dear M'love,</h1>
          <p>
            Happy Valentine's day and advance Happy 18th monthasary! 🥰 I hope
            we can maintain this relationship forever kekek because I know
            you're the one for me 😘. It's only been a month and a half since
            we've seen each other but it already feels like eternity. I miss you
            so much!! I know we both have been busy lately, and it has been
            really hard to find some time to hangout. However, I appreciate you
            so much for always keeping me in the loop with your stories and
            chika! I want you to know that I really love listening to them even
            though sometimes I still fall asleep. I swear it's your soothing
            voice + my sleepiness 😅😅. Hmmmm Im running out of things to say
            kek, maybe because it's already 4:30 am here XD. Anw, I hope I'll
            get to see you again this year! so we can do more stuff together in
            real life. I also can't wait for u to get here! I will try my best
            for our future!! I hope ur ready soon too! because I really really
            want us to be together soon! I LOVE YOU SO MUCH, I MISS YOU MWAMWA!
            ❤️❤️
          </p>
          <p>
            PS: I hope u like this mini program that I did kekekeke. I know it's
            pretty simple for now, but I will keep adding features on this site:
            including our albums! so let me know how you would like the page to
            look like mwa!.
          </p>
          <footer>Your Love,</footer>
          <footer>Gelzen</footer>
        </div>
      </div>

      {/* <div className="nav nav-overlay">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item active-nav">
              <a href="index.html" className="hover-target">
                Home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="portfolio.html" className="hover-target">
                Portfolio
              </a>
            </li>
            <li className="nav__list-item">
              <a href="styles.html" className="hover-target">
                Styles
              </a>
            </li>
            <li className="nav__list-item">
              <a href="blog.html" className="hover-target">
                Blog
              </a>
            </li>
            <li className="nav__list-item">
              <a href="single-post.html" className="hover-target">
                Single Post
              </a>
            </li>
            <li className="nav__list-item">
              <a href="contact.html" className="hover-target">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default Navbar;
