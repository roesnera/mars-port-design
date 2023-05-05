import React from 'react';
import './ProjectTile.css';

export default function ProjectTile({title}) {



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
