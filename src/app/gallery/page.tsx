export default function Gallery() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body container is-max-desktop">
          <h1 className="title is-uppercase">Gallery</h1>
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
          <div className="tile is-ancestor">
            <div className="tile">
              <figure className="image is-1x2 media-right">
                <video autoPlay loop width="300">
                  <source
                    src="61-20231028-214928.638693-slomo.mp4"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
            <div className="tile">
              <figure className="image is-1x2 media-right">
                <video autoPlay loop width="300">
                  <source
                    src="61-20231028-214928.638693-slomo.mp4"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
            <div className="tile">
              <figure className="image is-1x2 media-right">
                <video autoPlay loop width="300">
                  <source
                    src="61-20231028-214928.638693-slomo.mp4"
                    type="video/mp4"
                  />
                </video>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
