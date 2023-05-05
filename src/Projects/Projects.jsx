import React, { useState } from 'react';
import './Projects.css';
import Project from '../Project';
import ProjectTile from '../ProjectTile';

export default function Projects() {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState();

  function handleClick(title) {
    console.log("handleClick called");
    setClicked(true);
    setSelected(title);
  }

  return <section className='projects-section'>
    <h2 className='projects-heading'>Projects</h2>
    {clicked ? <ProjectTile title={selected}/> : null}
    <div className="projects-col">
      <Project makeSelection={handleClick} title="mars"/>
      <Project makeSelection={handleClick} title="Tech Fiends Forever"/>
      <Project makeSelection={handleClick} title="Some third thing"/>
    </div>
    
    </section>;
}
