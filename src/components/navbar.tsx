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
          <a
            className="navbar-item has-text-weight-bold is-uppercase has-text-primary"
            href="/"
          >
            <img src="moments.svg" />
            &nbsp;&nbsp;Infinite Clicks
          </a>
        </div>
        <div className="navbar-menu" id="navbar-menu">
          {pages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className="navbar-item is-uppercase"
            >
              {page.name}
            </a>
          ))}
        </div>
        <div className="navbar-end">
          <a
            href="/contact"
            className="navbar-item button is-primary"
            role="button"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
