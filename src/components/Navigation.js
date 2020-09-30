import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/login",
  },
];

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span>Bernice Lam</span>
      <ul>
        {/* callback function that happens each time of iteration */}
        {/* returning a mapped element requires a key-value */}
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
