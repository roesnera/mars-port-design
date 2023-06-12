import { useState, useEffect } from 'react';
import './Projects.css';
import Project from '../Project';

export default function Projects() {
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    setAnimation(1);
    console.log("projects animation set");
  }, [])


  // eslint-disable-next-line react/no-unknown-property
  return <section className='projects-section in-from-left' animation={animation}>
    <h2 className='projects-heading'>Projects</h2>
    <div className="tabs">
      <Project title="mars"/>
      <Project title="InDev"/>
      <Project title="Adam's api"/>
    </div>
    
    </section>;
}
