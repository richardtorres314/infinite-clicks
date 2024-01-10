import Link from "next/link";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column">
          <div className={styles.logo}>
            <figure className="image is-64x64">
              <img src="moments.svg" />
            </figure>
            <h3 className="is-size-5 has-text-weight-bold is-uppercase">
              Infinite Clicks
            </h3>
          </div>
        </div>
        <div className="column">
          <div className={styles.container}>
            <h3 className="subtitle has-text-weight-bold is-uppercase">
              Quick Links
            </h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <div className={styles.container}>
            <h3 className="subtitle has-text-weight-bold is-uppercase">
              Service Area
            </h3>
            <div>Essex County</div>
            <div>Suffolk County</div>
            <div>Middlesex County</div>
            <div>Norfolk County</div>
            <div>Plymouth County</div>
            <div>Bristle County</div>
            <div>Barnstable County</div>
          </div>
        </div>
        <div className="column">
          <div className={styles.container}>
            <h3 className="subtitle has-text-weight-bold is-uppercase">
              Contact Us
            </h3>
            <div>Infinite Clicks</div>
            <div>
              <a href="tel:781-539-4423">(781)539-4423</a>
            </div>
            <div>Salem, MA</div>
            <div>
              <a href="mailto:rentinfclicks@gmail.com">
                rentinfclicks@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="has-text-centered pt-6">
        Infinite Clicks &copy; 2024 &bull; Salem, MA
      </div>
    </footer>
  );
}
