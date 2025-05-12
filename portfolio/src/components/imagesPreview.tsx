import '../styles/Card.css';
import { useState } from 'react';

interface CardTypes {
  title: string;
  images: string[];
  imgClick: () => void;
}

function ImgPreview({ title, images, imgClick }: CardTypes) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const goToNextImage = () => {
    if (images?.length) {
      setCurrentImgIndex((prev) => (prev + 1) % images.length);
    }
  };

  const goToPrevImage = () => {
    if (images?.length) {
      setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <img
        id="img"
        src={images[currentImgIndex]}
        alt={title}
        onClick={imgClick}
      />

      {images.length > 1 && (
        <div className="ip-btn-cont">
          <button onClick={goToPrevImage}>←</button>
          <button onClick={goToNextImage}>→</button>
        </div>
      )}
    </>
  );
}

export default ImgPreview;
