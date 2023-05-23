import './Project.css';
import ProjectTile from '../ProjectTile';

export default function Project({title}) {

  // useEffect(() => {
  //   document.getElementById(title).addEventListener('click', handleClick); 
  // })

  // function handleClick() {
  //   makeSelection(title);
  // }

  return <div className="tab">
        <input type="radio" name="rd" id="rd4" className='close-input'/>
        <label htmlFor="rd4" className='tab-close'></label>
      <input type="radio" name="rd" id={title} className='label-input' />
      <label htmlFor={title} className="tab-label">{title}</label>
      <ProjectTile title={title}/>
  </div>
  
}


