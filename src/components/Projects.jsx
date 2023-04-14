import React from 'react';
import { useGlobalContext } from '../context.jsx';
const Projects = () => {
  const {portfolioProjects} = useGlobalContext();
  console.log(portfolioProjects);
  return (
    <section className='projects' id='projects'>
        <h2>Projects</h2>
        <div className='wrap-projects'>
            {
              portfolioProjects.map(item => {
                return (
                  <div className='outer' key={item.id}>
                    <div className='inner'>
                      <div className='projects'>
                          <img src={item.image} />
                          <h3>{item.caption}</h3>
                          <p>{item.description}</p>
                          <div className='btns'>
                            <a target='_blank' href={item.live}><button>Live preview</button></a>
                            <a target='_blank' href={item.github}><button>Check on github</button></a>
                          </div>
                        </div>
                      </div>
                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default Projects
