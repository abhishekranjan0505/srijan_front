import React from 'react';
import { Component } from 'react';
import './styles.css';

class About extends Component {
  render() {
    return (
      <section class="features">
        <div class="feature-container">
          <img
            src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png"
            alt="Flexbox Feature"
          ></img>
          <h2>Flexbox Featured</h2>
          <p>
            This pen contains use of flexbox for the headline and feature
            section! We use it in our mobile navbar and show the power of mixing
            css grid and flexbox.
          </p>
        </div>
        <div class="feature-container">
          <img
            src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png"
            alt="Flexbox Feature"
          ></img>
          <h2>CSS Grid Navigation</h2>
          <p>
            While flexbox is used for the the mobile navbar, CSS grid is used
            for the desktop navbar showing many ways we can use both.
          </p>
        </div>
        <div class="feature-container">
          <img
            src="https://blog.edx.org/wp-content/uploads/2015/09/null-1.jpg"
            alt="Flexbox Feature"
          ></img>
          <h2>Basic HTML5</h2>
          <p>
            This pen contains basic html to setup the page to display the
            responsive navbar.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
