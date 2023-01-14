import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3_footer section_padding'>
      <div className="gpt3_footer-heading">
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
      </div>
      
      <div className="gpt3_footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3_footer-links">
        <div className="gpt3_footer-links_logo">
          <img src={gpt3logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Footer
