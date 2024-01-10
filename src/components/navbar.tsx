"use client";

import Link from "next/link";

const pages = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export function Navbar() {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      area-label="main navigation"
      id="header"
    >
      <div className="container is-align-items-center">
        <div className="navbar-brand">
          <Link
            className="navbar-item has-text-weight-bold is-uppercase has-text-primary"
            href="/"
          >
            <img src="moments.svg" />
            &nbsp;&nbsp;Infinite Clicks
          </Link>
        </div>
        <div className="navbar-menu" id="navbar-menu">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="navbar-item is-uppercase"
            >
              {page.name}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <Link
            href="/contact"
            className="navbar-item button is-primary"
            role="button"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
