import './Tech.css';
import TechIcon from '../TechIcon';

export default function Tech() {
  const tools = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "React",
    "Spring",
    "Vite",
    "Nextjs",
    "Docker",
    "Supabase",
    "Wordpress",
    "PHP"
  ]

  return <div className='tech-subsection'>What do I do?
    Take a look at some of the tools that I use for front- and backend development and deployment:
    <div className="tools">
      {tools.map((e, i) => {
          return <TechIcon name={e.toLowerCase()} key={i}/>
        })}
      </div>
  </div>;
}
