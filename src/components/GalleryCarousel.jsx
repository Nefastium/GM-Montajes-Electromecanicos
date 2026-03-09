import { useEffect, useRef, useState } from "react";

function GalleryCarousel() {

  const trackRef = useRef(null);

  const images = [
    "../../images/trabajo1.jpg",
    "../../images/trabajo2.jpg",
    "../../images/trabajo3.jpg",
    "../../images/trabajo4.jpg",
    "../../images/trabajo5.jpg"
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }

  }, [index]);

  return (
    <div className="carousel">

      <div className="carousel-window">
        <div className="carousel-track" ref={trackRef}>

          {images.map((img, i) => (
            <div className="carousel-slide" key={i}>
              <img src={img} alt={`Trabajo ${i + 1}`} />
            </div>
          ))}

        </div>
      </div>

      <button className="carousel-btn left" onClick={prevSlide}>
        ‹
      </button>
      
      <button className="carousel-btn right" onClick={nextSlide}>
        ›
      </button>

    </div>
  );
}

export default GalleryCarousel;