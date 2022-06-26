import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
const Blog = () => {
  return(
  <div className="ai_blog section__padding" id="blog">
    <div className="ai_blog-heading">
      <h1>A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="ai_blog-container">
      <div className="ai_blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="A.i.Convergence(Thailand)" />
      </div>
      <div className="ai_blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="A.i.Convergence(Thailand)" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="A.i.Convergence(Thailand)" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="A.i.Convergence(Thailand)" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="A.i.Convergence(Thailand)" /> 
      </div>
    </div>
  </div>
  )
  };

export default Blog;