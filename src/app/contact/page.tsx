import classNames from "classnames";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body container is-max-desktop">
          <h1 className="title is-uppercase">Contact Us</h1>
        </div>
      </section>
      <section className="section">
        <div className="container is-max-desktop">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sed metus nulla. Maecenas et nisi cursus, rhoncus risus at, euismod
            nisl. Maecenas tempus ultrices nunc non gravida. In auctor nec dui
            dictum condimentum. Aliquam iaculis sed arcu sodales rutrum.
            Pellentesque lacus lectus, venenatis eget nisl at, egestas fermentum
            elit. Duis ullamcorper bibendum justo at tincidunt.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container is-max-desktop">
          <article className={classNames("media", styles.content)}>
            <figure className="media-left">
              <div className={classNames("image", styles.image)}>
                <img src="salem.png" />
              </div>
            </figure>
            <div className="media-content">
              <div className="has-text-weight-bold mb-2">Contact Info</div>
              <div>
                <div>Infinite Clicks</div>
                <div>
                  <a href="tel:(781)539-4423">(781)539-4423</a>
                </div>
                <div>Salem, MA</div>
                <div>
                  <a href="mailto:rentinfclicks@gmail.com">
                    rentinfclicks@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
