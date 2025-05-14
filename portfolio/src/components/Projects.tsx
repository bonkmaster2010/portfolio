import Card from './Card';
import ImgPreview from './imagesPreview';
import Footer from './Footer';
import { projectData } from './projectData';
import { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState(projectData);

  function imgPrev(idx: number) {
    setProjects((prev) => {
      return prev.map((p, i) =>
        i === idx ? { ...p, isActive: !p.isActive } : p
      );
    });
  }

  return (
    <>
      <h1 id="pro-title">Projects</h1>
      <hr id="pro-hr" />
      <div className="projects-cont">
        <p style={{ opacity: '0.7', margin: '0px' }}>
          Note these projects still have some issues. I'm still working on fixing them (also click on the images to see their full size).
        </p>
        <p style={{ opacity: '0.7', margin: '0px' }}>
          Also, the Vanilla JavaScript projects are really basic — they were of course my first projects.
        </p>
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
              <div className="overlay">
                <div className="wrapper">
                  <ImgPreview
                    title={proj.title}
                    images={proj.images}
                    imgClick={() => imgPrev(i)}
                  />
                  <button id='img-close' onClick={() => imgPrev(i)}>Close</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer top="2px solid #00f2ff"/>
    </>
  );
}

export default Projects;
