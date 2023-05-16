import React from 'react';
import './Footer.css';

export default function Footer() {
  return <footer>
    <h3 className='footer-item'>Say Hello</h3>
    <div className="footer-item footer-list">
      <div className="footer-list-item">aaroesner@gmail.com</div>
      <div className="footer-list-item">My Resume</div>
      <a className="footer-list-item" rel="noreferrer" href="https://www.github.com/roesnera" target="_blank">My GitHub</a>
    </div>

  </footer>
}
