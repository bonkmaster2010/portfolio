import Card from './Card';
import ImgPreview from './imagesPreview';
import Footer from './Footer';
import { projectData } from './projectData';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState(projectData);
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
      <h1 id="pro-title">Projects</h1>
      <hr id="pro-hr" />
      <div className="projects-cont">
        <p style={{ opacity: '0.7', margin: '0px' }}>
          Note these projects still have some issues. I'm still working on fixing them
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
                 <div className='image-preview-cont'>

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
       <button className='other-projects-btn' onClick={() => navi("/other")}>Other Projects</button>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;
