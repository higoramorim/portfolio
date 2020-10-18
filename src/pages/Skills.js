import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Skills extends Component {
  render() {
      return (
        <div className="slider">
            <Link to="/"><button className="voltar">Voltar</button></Link>
          <ul className="slides">
            <li>
              <img src="http://lorempixel.com/580/250/nature/1" alt=""/>
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/2" alt=""/>
              <div className="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/3" alt=""/>
              <div className="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="http://lorempixel.com/580/250/nature/4" alt=""/>
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>
      )
  }
}

export default Skills;