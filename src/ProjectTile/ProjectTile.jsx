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
    desription: "A promotional site for a social media influencer built in collaboration with the influencer themself. This project was exciting to me as it offered the opportunity to solve a lot of different problems: they wanted the phones to be clickable and to display screenshots of their actual video content (solved using css); they also wanted their metrics to updated automatically. To solve the latter problem, I created a database and an authenticated api that the site fetches data from, and which I can scrape and upate data to automatically.",
    tools: [
      "React",
      "Vite",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Docker"
    ],
    link: "https://mariahthemystic.org/"
  }: title==="InDev" ? {
    title,
    desription: "A blog site built with some of my colleagues front-to-back. Initially we chose to build it using Vite and React, but due to some concerns about routing and performance we decided to migrate the project to NextJS and see what all the hype was about.",
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
    desription: "I built this API for a frontend site that needed data to be updated automatically, and after shopping around at different options I realized that including the webscraper in the frontend was just too heavy and not resource efficient. I decided to build the api so that I could separate out my front and backend concerns, and I expect to use this individual api for more databases in the future. At the moment, the frontend is not pretty but I expect to add something there soon.",
    tools: [
      "Java",
      "Spring",
      "Docker",
      // todo: create Java and Spring icons
    ],
    link: "https://adamsapi.xyz/api/v1/metrics/peek"
  }

  // let iconStr = "";

  // for(const item of details.tools){
  //   iconStr += icons[item]+" ";
  // }




  return (
    <div className='project-tile tab-content'>
      <div className='project-tile--img' name={title}>
        {/* {details.title} */}
      </div>
      <div className='project-tile--tech'>
        <div className="project-tile--tech__description">{details.desription}</div>
        {details.link? <div className="project-tile--tech__link"><a href={details.link}>Click here to visit</a></div>: <div className='project-tile--tech__no-link'>To be deployed soon . . .</div>}
        <div className="project-tile--tech__icons">{details.tools.map((e, i) => {
          return <TechIcon name={e.toLowerCase()} key={i}/>
        })}</div>
      </div>
    </div>
  )
}