import React from 'react';
import './blog.css';
import {Article} from '../../components';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Blog = () => {
  return (
    <div className='gpt3_blog section_padding' id='blog' >
      <div className="gpt3_blog-heading">
        <h1 className='gradient_text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3_blog-cntr">
        <div className="gpt3_blog-cntr_grpA">
          <Article imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className="gpt3_blog-cntr_grpB">
          <Article imgUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog
