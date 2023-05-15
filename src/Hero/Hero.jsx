import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import './Hero.css';
import HeroAdditions from './HeroAdditions';

export default function Hero() {
  const heroAnimate = useSpring({
    from: {
      transform: 'translateX(-150%',
    },
    to: {
      transform: 'translateX(0%)',
    }
  });






  return <animated.div className='hero' >
    <div className="title-box">
      <h1 className="title-text">Adam Roesner:</h1>
      <h2 className="subtitle">Full Stack Developer</h2>
    </div>
    <div className="svgs">

    </div>
      <p className="blurb">My name is Adam Roesner, I am a full stack developer based in New York City. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, sed? Excepturi laborum quibusdam magni debitis eaque nisi officiis corrupti quisquam voluptas eos commodi reprehenderit dolor ratione nesciunt sapiente, obcaecati porro!</p>
      <HeroAdditions />
  </animated.div>;
}
