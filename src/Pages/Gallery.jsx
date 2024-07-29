import Footer from "../components/Footer";

import HeroPages from "../components/HeroPages";
import GalleryImages from "../components/GalleryImages";

function Gallery() {
 



  return (
    <>
      <section className="models-section">
        <HeroPages name="Our Gallery" />
       <GalleryImages/>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>051 2203088</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Gallery;
