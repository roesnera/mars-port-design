import React, { useEffect } from 'react';
import './Project.css';

export default function Project({title, makeSelection}) {

  // useEffect(() => {
  //   document.getElementById(title).addEventListener('click', handleClick); 
  // })

  // function handleClick() {
  //   makeSelection(title);
  // }

  return <div className="tab">
      <input type="radio" name="rd" id={title} />
      <label htmlFor={title} className="tab-label">{title}</label>
      <div className="tab-content">some stuff</div>
  </div>
  
}
