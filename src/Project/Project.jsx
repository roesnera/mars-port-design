import React, { useEffect } from 'react';
import './Project.css';

export default function Project({title, makeSelection}) {

  useEffect(() => {
    document.getElementById(title).addEventListener('click', handleClick); 
  })

  function handleClick() {
    makeSelection(title);
  }

  return <div className='project'>
    <div className='arrow'></div>
    <div className='project-text'>XXXXXXXX <span id={title}>{title}</span></div>
  </div>;
}
