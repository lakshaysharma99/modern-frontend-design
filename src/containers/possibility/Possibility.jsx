import React from 'react';
import  possibiityImage  from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3_poss section_padding' id='possibility'>
      <div className="gpt3_poss-image">
        <img src={possibiityImage} alt='possibility' />
      </div>
      <div className="gpt3_poss-container">
        <h4 cl>Request Early Access to Get Started</h4>
        <h1 className='gradient_text'>
        The possibilities are beyond your imagination
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
    </div>
  )
}

export default Possibility
