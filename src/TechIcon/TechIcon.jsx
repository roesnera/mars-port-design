import './TechIcon.css';
import { ReactPropTypes as PropTypes } from 'react';

export default function TechIcon({name}) {
  console.log(name);
  return <div className={`tech-icon ${name}-icon`}></div>;
}

TechIcon.propTypes = {name: PropTypes.string.isRequired}