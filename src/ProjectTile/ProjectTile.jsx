import './ProjectTile.css';
import TechIcon from '../TechIcon';

export default function ProjectTile({ title }) {


  // function getDeets() {
  //   switch (title) {
  //   case 'mars':
  //     return (<div className='project-tile'>{title}</div>);
  //   case 'Tech Fiends Forever':
  //     return (<div className='project-tile'>{title}</div>);
  //   case 'Some third thing':
  //     return (<div className='project-tile'>{title}</div>);
  //   default:
  //     return null;
  //   }
  // }

  const details = title==="mars" ? {
    title,
    desription: "A promotional site for a social media influencer built based on a design spec.",
    tools: [
      "React",
      "Vite",
      "HTML5",
      "CSS3",
      "JavaScript",
    ]
  }: title==="Tech Fiends Forever" ? {
    title,
    desription: "A blog site built with some of my colleagues front-to-back",
    tools: [
      "React",
      "NextJS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Supabase",
    ]
  }: {
    title,
    desription: "A placeholder project until I have a third one to share",
    tools: [
      "React",
      "NextJS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Supabase",
      "Docker"
    ]
  }

  // let iconStr = "";

  // for(const item of details.tools){
  //   iconStr += icons[item]+" ";
  // }




  return (
    <div className='project-tile tab-content'>
      <div className='project-tile--img' title={title}>
        {/* {details.title} */}
      </div>
      <div className='project-tile--tech'>
        <div className="project-tile--tech__description">{details.desription}</div>
        <div className="project-tile--tech__icons">{details.tools.map((e, i) => {
          return <TechIcon name={e.toLowerCase()} key={i}/>
        })}</div>
      </div>
    </div>
  )
}
