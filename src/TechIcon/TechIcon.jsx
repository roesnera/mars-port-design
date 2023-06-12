import React from 'react';
import './TechIcon.css';

export default function TechIcon({name}) {
  console.log(name);
  return <div title={name} className={`tech-icon ${name}-icon`}></div>;
}
