import { useState, useEffect } from 'react';
import './Projects.css';
import Project from '../Project';
import ProjectTile from '../ProjectTile';

export default function Projects() {
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    setAnimation(1);
    console.log("projects animation set");
  }, [])

  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState();

  function handleClick(title) {
    console.log("handleClick called");
    setClicked(true);
    setSelected(title);
  }

  // eslint-disable-next-line react/no-unknown-property
  return <section className='projects-section up-from-down' animation={animation}>
    <h2 className='projects-heading'>Projects</h2>
    {clicked ? <ProjectTile title={selected}/> : null}
    <div className="tabs">
      <Project makeSelection={handleClick} title="mars"/>
      <Project makeSelection={handleClick} title="Tech Fiends Forever"/>
      <Project makeSelection={handleClick} title="Some third thing"/>
    </div>
    
    </section>;
}
