import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = []

const Features = () => {
  return (
    <div className='gpt3_features section_padding' id='features'>
      <div className="gpt3_features-heading">
        <h1 className='gradient_text'>
        The Future is now and you just need to realize it. Step into Future Today and make it happen.
        </h1>
        <p>
          Request Early access to Get Started!
        </p>
      </div>
      <div className="gpt3_features-body">
        <Feature title='Improving end distrusts instantly' text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'/>
        <Feature title='Become the tended active' text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'/>
        <Feature title='Message or am nothing' text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'/>
        <Feature title='Really boy law county' text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'/>
      </div>
    </div>
  )
}

export default Features
