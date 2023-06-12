import { useEffect, useState } from 'react';
import './Hero.css';
import Tech from '../Tech';

export default function Hero({ toggle }) {
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    setAnimation(1);
    console.log(animation);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
    <p className="blurb">My name is Adam Roesner, I am a Full Stack Web Developer based in New York City and a web development teacher. I am passionate about building cool things that make people happy and learning all there is to know about my field. Let's build something together!</p>
    <div className="dot dot-1"></div>
    <div className="dot dot-2"></div>
    <Tech/>

  </div>;
}
