import React from 'react';
import { useGlobalContext } from '../context.jsx';
const Technologies = () => {
    const {Technologies, Addition} = useGlobalContext();
    const techStyle = {
        fontSize: '2.0rem',
        color: '#fff',
        marginBottom: '1.0rem'
    }
    const levelStyle = {
        fontSize: '1.4rem',
        color: '#fff'
    }
  return (
    <section className='tech' id='technologies'>
        <h2>Technologies</h2>
        <div className='container'>
            {
                Technologies.map(item => {   
                    return <div className='section-technologies' key={item.id}>
                        <div className='wrap-tech'>
                            <span style={techStyle}>{item.tech}</span>
                            <span style={levelStyle}>{item.level}</span>
                        </div>
                        <div className='rectangle' style={item.level === 'Regular' 
                        ? {width: '50%'} : item.level === 'Beginner' ? {width: '30%'}
                        : {width: '90%'}}></div>
                    </div>
                })
            }
        </div>
        <h2 className='overwrite-width'>Additional technologies and skills</h2>
        <div className='wrap-other-skills'>
            {
                Addition.map((item, key) => {
                return <div className='wrap-circle-skills' key={key}>
                        <span className='circle'></span>
                        <span className='other-skills'>{item}</span>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Technologies
