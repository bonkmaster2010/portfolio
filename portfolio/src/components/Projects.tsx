import { useState } from 'react';
import '../styles/Projects.css';
import Card from './Card';
import ImgPreview from './imagesPreview';
import { projectData } from './projectData';

function Projects() {
  const [projects, setProjects] = useState(projectData);
  
  function imgPrev(idx: number){
    setProjects((prev) => {
      return prev.map((p: any, i: number) => i === idx ? {...p, isActive: !p.isActive}: p)
    })
}

  return (
    <>
      <h1 id='pro-title'>Projects</h1>
      <hr id='pro-hr' />
      <div className='projects-cont'>
        {projects.map((proj, i) => (
          <>
          <Card
            key={i}
            images={proj.images}
            title={proj.title}
            desc={proj.desc}
            tools={proj.tools}
            web={proj.web}
            git={proj.git}
            imgClick={() => imgPrev(i)}
          />
          {proj.isActive && (
            <div className='overlay'>
              <div className='wrapper'>
                <ImgPreview title={proj.title} images={proj.images} imgClick={() => imgPrev(i)}/>
                <button onClick={() => imgPrev(i)}>Close</button>
              </div>
            </div>
          )}
          </>
      ))}
      </div>


    </>
  );
}

export default Projects;
