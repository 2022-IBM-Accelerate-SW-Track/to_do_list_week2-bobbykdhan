import React, { Component } from 'react';

import "../../../Week 2/src/pages/About.css";
import bobby from "../../../Week 2/src/assets/bobby.jpeg";


  export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                  className="profile_image"


                  alt="Profile Pic"


                  src={bobby}
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Bobby Dhanoolal</div>
              <div className="brief_description">
                Hi I am second year student at Rochester Institute of Technology majoring in Computer Science.

                I used to wrestle throughout high school and I like to play a lot of video games in my free time.
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}