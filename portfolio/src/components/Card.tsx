import '../styles/Card.css';
import { useState } from 'react';

interface CardTypes{
    title: string;
    desc: string;
    tools: string;
    images: string[];
    web: string;
    git: string;
    imgClick: () => void;
}

function Card(props: CardTypes){

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
        <div className='Card'>              
            <img 
                src={props.images[currentImgIndex]} 
                alt={props.title}
                onClick={props.imgClick}
            />
          
          {props.images.length > 1 && <div className='card-btn-cont'>
                    <>
                        <button onClick={goToNextImage}>←</button>
                        <button onClick={goToPrevImage}>→</button>
                    </>
            </div>}

            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <p>{props.tools}</p>

            <div className='link-btns'>
                <a href={props.web} target='_blank'><button>Go To Website</button></a>
                <a href={props.git} target='_blank'><button>GitHub</button></a>
            </div>
        </div>
    )
}

export default Card;
