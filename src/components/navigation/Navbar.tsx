import Link from 'next/link';
import React from 'react';

function Navbar(props: any) {
  const { isVisible, closeNav } = props;

  return (
    <nav className={isVisible} id="main-navigation">
      <ul className="nav-links">
        <Link onClick={closeNav} className="nav-link" href="/">
          Home
        </Link>
        <Link
          onClick={closeNav}
          className="nav-link"
          href="/project-titan"
        >
          Project Titan
        </Link>
        <Link onClick={closeNav} className="nav-link" href="/events">
          Events
        </Link>
        <Link
          onClick={closeNav}
          className="nav-link"
          href="/contactPage"
        >
          Play With Us
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
