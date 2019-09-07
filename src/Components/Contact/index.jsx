import React from 'react';
import image from './asset.jpg';

function index() {
  return (
    <div class='card about'>
      <h5 class='card-header'>Daniel Charles Mwangila</h5>
      <div class='card-body'>
        <div className='media'>
          <img src={image} alt='author' className='mr-3 img' />
          <div className='media-body'>
            <p>
              I am a developer from Singida,Tanzania, Been coding for 2 years
              now. Currently, working at Andela as Software Engineer.
            </p>
            <p>I mainly work with:</p>
            <ul class='proglang'>
              <li>
                <i class='fab fa-php'></i>
              </li>
              <li>
                <i class='fab fa-java'></i>
              </li>
              <li>
                <i class='fab fa-js-square'></i>
              </li>
              <li>
                <i class='fab fa-angular'></i>
              </li>
            </ul>
            <br /> <br />
            <p>I am socially available on:</p>
            <ul className='social'>
              <li>
                <a href='https://www.facebook.com/margalight' target='_blank'>
                  <i class='fab fa-facebook-square' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/truestbyheart/'
                  target='_blank'
                >
                  <i class='fab fa-instagram' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/daniel-mwangila-47562410b/'
                  target='_blank'
                >
                  <i class='fab fa-linkedin' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
