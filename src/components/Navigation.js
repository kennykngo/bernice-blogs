import React from "react";

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
          <li key={index}>{link.title}</li>
        ))}
      </ul>
    </nav>
  );
}
