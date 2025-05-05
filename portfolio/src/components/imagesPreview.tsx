import '../styles/Card.css';
import { useState } from 'react';

interface CardTypes{
    title: string;
    images: string[];
    imgClick: () => void;
}

function ImgPreview(props: CardTypes){

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const goToNextImage = () => {
      if (props.images?.length) {
        setCurrentImgIndex((prev) => (prev + 1) % props.images.length);
      }
    };
    
    const goToPrevImage = () => {
      if (props.images?.length) {
        setCurrentImgIndex((prev) => 
          (prev - 1 + props.images.length) % props.images.length
        );
      }
    };

    return(
        <>
            <img 
                id='img'
                src={props.images[currentImgIndex]} 
                alt={props.title}
                onClick={props.imgClick}
            />
          
            <div className='ip-btn-cont'>
                        <button onClick={goToNextImage}>l</button>
                        <button onClick={goToPrevImage}>r</button>
            </div>
            </>
    )
}

export default ImgPreview;
