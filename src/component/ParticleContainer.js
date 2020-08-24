import React, {Component} from 'react';
import "./common.css";
import Particles from 'react-particles-js'; 
import spacebg from '../Pic/spacebg.jpg';
import {modeChange} from '../action';
import {connect} from 'react-redux';

class ParticleContainer extends Component{
  render()
  {
    var color, sColor;
    if(this.props.mode==='bodyLight')
    { 
         color = '#003366';
         sColor = '#336699';

    }
    else
    {
      color = '#e25822';
      sColor = '#FFCC00';
    }
    console.log(color);
    console.log(sColor);



    return(
      <div >
     <Particles 
              params={{
                  "particles": {
                      "number": {
                          "value": 150,
                          "density": {
                              "enable": true,
                              "value_area": 1803.4120608655228
                          }
                      },
                      "color": {
                          "value": color
                      },
                      "shape": {
                          "type": "circle",
                          "stroke": {
                              "width": 2,
                              "color": sColor
                          },
                          "polygon": {
                              "nb_sides": 4
                          },
                          "image": {
                              "src": this.sColor,
                              "width": 100,
                              "height": 100
                          }
                      },
                      "opacity": {
                          "value": 0.4008530152163807,
                          "random": false,
                          "anim": {
                              "enable": false,
                              "speed": 1,
                              "opacity_min": 0.1,
                              "sync": false
                          }
                      },
                      "size": {
                          "value": 1.5,
                          "random": true,
                          "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                          }
                      },
                      "line_linked": {
                          "enable": true,
                          "distance": 0,
                          "color": "#FFCC00",
                          "opacity": 0.3687847739990702,
                          "width": 0.6413648243462091
                      },
                      "move": {
                          "enable": true,
                          "speed": 6,
                          "direction": "top",
                          "random": false,
                          "straight": false,
                          "out_mode": "out",
                          "bounce": false,
                          "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                          }
                      }
                  },
                 "interactivity": {
    "detect_on": "canvas",
    // activate
    "events": {
        "onhover": {
          "enable": true,
          "mode": [
            "grab",
            "bubble"
          ]
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
    },
    // configure
    "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.7
          }
        },
        "bubble": {
          "distance": 600,
          "size": 12,
          "duration": 1,
          "opacity": 0.8,
          "speed": 2
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 20 // How many you want added
        },
        "remove": {
          "particles_nb": 10
        }
    }
  },
  "retina_detect": true // No clue what this does, docs don't explain, too scared to remove. ¯\_(ツ)_/¯
  
              }} />
      </div>
    );
  }
  
}
const mapStateToProps = state =>
{
  const {mode}= state.Mode;
  return({
    mode
  });
};

export default connect(mapStateToProps) (ParticleContainer);
