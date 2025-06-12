import Card from './Card';
import ImgPreview from './imagesPreview';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import { otherProjects } from './projectData';
import { useState } from 'react';
import '../styles/Projects.css';

function Other() {
  const [projects, setProjects] = useState(otherProjects);
  const navi = useNavigate();

  function imgPrev(idx: number) {
    setProjects((prev) => {
      return prev.map((p, i) =>
        i === idx ? { ...p, isActive: !p.isActive } : p
      );
    });
  }

  return (
    <>
      <h1 id="pro-title">Other Projects</h1>
      <hr id="pro-hr" />
      <div className="projects-cont">
        <p style={{ opacity: '0.7', margin: '0px' }}>
         These are my small projects
        </p>
        <p style={{ opacity: '0.7', margin: '0px' }}>
          Also, the Vanilla JavaScript projects are really basic — they were of course my first projects.
        </p>
      <button className='other-projects-btn' onClick={() => navi('/projects')}>Go Back</button>

        {projects.map((proj, i) => (
          <div key={i}>
            {!proj.isActive && (
              <Card
                images={proj.images}
                title={proj.title}
                desc={proj.desc}
                tools={proj.tools}
                web={proj.web}
                git={proj.git}
                imgClick={() => imgPrev(i)}
              />
            )}

            {proj.isActive && (
              <div className="overlay" onClick={() => imgPrev(i)}>
                <div className="wrapper">
                  <div className='image-preview-cont' onClick={(e) => e.stopPropagation()}>
                  <ImgPreview
                    title={proj.title}
                    desc={proj.desc}
                    tools={proj.tools}
                    web={proj.web}
                    git={proj.git}
                    images={proj.images}
                    imgClick={() => imgPrev(i)}
                  />
                  <button id='img-close' onClick={() => imgPrev(i)}>Close</button>
                 </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer/>
    </>
  );
}

export default Other;
