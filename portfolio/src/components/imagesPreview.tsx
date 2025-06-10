import '../styles/Card.css';
import { useState, } from 'react';

interface CardTypes {
  title: string;
  desc: string;
  tools: string;
  web: string;
  git: string;
  images: string[];
  imgClick: () => void;
}

function ImgPreview({ title, desc, tools, git, web, images, imgClick }: CardTypes) {
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
        <div className='link-btns' style={{marginBottom: "20px"}}>
        <a href={web} target='_blank'><button>Go To Website</button></a>
        <a href={git} target='_blank'><button>GitHub</button></a>
        </div>
      </div>
    </>
  );
}

export default ImgPreview;
