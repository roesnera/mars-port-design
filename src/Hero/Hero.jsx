import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero({ toggle }) {
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    setAnimation(1);
    console.log(animation);
  })
  function scrollToMail() {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
  }


  // eslint-disable-next-line react/no-unknown-property
  return <div className='hero puff-in-center' animation={animation}>
    <div className="title-box">
      <h1 className="title-text">Adam Roesner:</h1>
      <h2 className="subtitle">Full Stack Developer</h2>
    </div>
    <div className="links">
      <a className="mail" onClick={scrollToMail}>
        <div className="mail-img"></div>
      </a>
      <a href="https://www.linkedin.com/in/adam-roesner-33129a127/" rel="noreferrer" target="_blank" className='linkedin'>
        <div className="linkedin-img"></div>
      </a>
    </div>
    <p className="blurb">My name is Adam Roesner, I am a full stack developer based in New York City. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, sed? Excepturi laborum quibusdam magni debitis eaque nisi officiis corrupti quisquam voluptas eos commodi reprehenderit dolor ratione nesciunt sapiente, obcaecati porro!</p>
    <div className="dot dot-1"></div>
    <div className="dot dot-2"></div>

  </div>;
}
