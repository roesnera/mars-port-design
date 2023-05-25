import './Loading.css';
import { useState, useEffect } from 'react';

export default function Loading() {
  const [animate, setAnimate] = useState(0);

  useEffect(() => {
   setAnimate(1); 
  },[])



  // eslint-disable-next-line react/no-unknown-property
  return <div className='loading' animation={animate}>
    <div className='loading-text'>Loading . . .</div>
  </div>;
}
