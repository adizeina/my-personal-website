import React from 'react';
import experienceData from '../data/experienceData.json';



const Experience = () => {
  return (
    <>
    <h1>My Experience</h1>
    { experienceData.experiences.map((experience) => (
        <>
        <h2>{experience.jobTitle}</h2>
        <h2>{experience.companyName}</h2>
        <h3>{experience.time}</h3>
        <img src={experience.image}></img>
        </>
        ))}
    
    </>
  )
};

export default Experience;
