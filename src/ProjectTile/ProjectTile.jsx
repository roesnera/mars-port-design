import React from 'react';
import './ProjectTile.css';

export default function ProjectTile({title}) {


  function getDeets() {
    switch (title) {
    case 'mars':
      return (<div className='project-tile'>{title}</div>);
    case 'Tech Fiends Forever':
      return (<div className='project-tile'>{title}</div>);
    case 'Some third thing':
      return (<div className='project-tile'>{title}</div>);
    default:
      return null;
    }
  }


  return (
    <div className='project-tile'>
      <div className='project-tile--img'>
        {title}
      </div>
      <div className='project-tile--tech'>
        React, HTML5, CSS3, JS
      </div>
    </div>
  )
}
