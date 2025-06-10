import '../styles/Card.css';
import { useState, useEffect } from 'react';

interface CardTypes {
  title: string;
  desc: string;
  tools: string;
  images: string[];
  isActive: boolean,
  imgClick: () => void;
}

function ImgPreview({ title, desc, tools, images, isActive, imgClick }: CardTypes) {
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
        <div style={{marginBottom: "20px"}} className="ip-btn-cont">
          <button onClick={goToPrevImage}>←</button>
          <button onClick={goToNextImage}>→</button>
        </div>
      )}
      
      <div className='ip-content'>
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>{tools}</p>
      </div>
    </>
  );
}

export default ImgPreview;
