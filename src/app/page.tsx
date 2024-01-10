export default function Home() {
  return (
    <>
      <section className="hero is-large is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Infinite Clicks</h1>
            <h2 className="subtitle">360 Photo Booth</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">What We Offer</h2>
          <p className="has-text-centered">
            Unlimited HD Videos &bull; Text Message Videos &bull; Photo Booth
            Attendant &bull; Fun Props &bull; Digital Video Album (up to 6
            months) &bull; On-site Video Sharing
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container is-max-desktop">
          <div className="media">
            <div className="media-content">
              <h2 className="title">Capture That Special Moment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sed metus nulla. Maecenas et nisi cursus, rhoncus
                risus at, euismod nisl. Maecenas tempus ultrices nunc non
                gravida. In auctor nec dui dictum condimentum. Aliquam iaculis
                sed arcu sodales rutrum. Pellentesque lacus lectus, venenatis
                eget nisl at, egestas fermentum elit. Duis ullamcorper bibendum
                justo at tincidunt.
              </p>
            </div>
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
      </section>
      <section className="section">
        <div className="container py-4 has-text-centered">
          <h2 className="title">Our Service</h2>
          <div className="level">
            <div className="level-item">
              <div>
                <div className="title mb-2">🥂</div>
                <div className="heading is-size-6">Weddings</div>
              </div>
            </div>
            <div className="level-item">
              <div>
                <div className="title mb-2">📁</div>
                <div className="heading is-size-6">Corporate Events</div>
              </div>
            </div>
            <div className="level-item">
              <div>
                <div className="title mb-2">🎂</div>
                <div className="heading is-size-6">Birthdays</div>
              </div>
            </div>
            <div className="level-item">
              <div>
                <div className="title mb-2">🥳</div>
                <div className="heading is-size-6">Parties</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
