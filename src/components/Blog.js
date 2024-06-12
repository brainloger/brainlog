import React from 'react';
import './Blog.css';
import { APP_NAME } from '../config/config';

function Blog() {
  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <article>
        <h3>Latest Update: New Features</h3>
        <p>We are excited to announce new features in the latest update of {APP_NAME}...</p>
      </article>
      <article>
        <h3>Tips and Tricks</h3>
        <p>Learn how to get the most out of {APP_NAME} with these tips and tricks...</p>
      </article>
    </section>
  );
}

export default Blog;
