import React, {Component} from 'react';
import Card from './Common/Card';
import java from '../Pic/java.png'
import express from '../Pic/express.jpg'
import jenkins from '../Pic/jenkins.png'
import bash from '../Pic/bash.jpg'
import bootstrap from '../Pic/bootstrap.jpg'
import cSharp from '../Pic/cSharp.png'
import firebase from '../Pic/firebase.jpg'
import git from '../Pic/git.png'
import jquery from '../Pic/jquery.jpg'
import maven from '../Pic/maven.png'
import mongo from '../Pic/mongo.jpg'
import node from '../Pic/node.jpg'
import postgres from '../Pic/postgres.jpg'
import react from '../Pic/react.jpg'
import reactNative from '../Pic/reactNative.png'
import redux from '../Pic/redux.jpg'
import 'tachyons';
import "tachyons/css/tachyons.min.css";
import "./common.css";
import "./newComm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticleContainer from './ParticleContainer';
import Manager from "../AndroidApps/Manager.apk";
class Body extends Component
{
  renderDev()
  {
    const dev = [bash, bootstrap, cSharp, express, firebase, java, git, jquery, maven, mongo, node, postgres, react, reactNative, redux, jenkins]
     const Items = dev.map(item => <Card img={item}/> );
     return(Items);
  }
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
}
  
  render()
  {
    return (
      <div>
        <div className="Particle">
          <ParticleContainer/>
        </div>
       
        <div className="centerItem">
          <div className="fr flex-1">
          
          
                <div className="innercol9Item">
                  <div className="container-fluid p-0">
                    <section className="resume-section" id="about">
                          <div className="resume-section-content">
                              <h1 className="mb-0">
                                  Avichal
                                  <span className="text-primary">Srivastava</span>
                              </h1>
                              <div className=" mb-5">
                                  U-Block, DLF phase3, Gurugram ,8357849520
                                  <a href="srivastava.svichal@gmail.com">, avichalsrivastava@gmail.com</a>
                              </div>
                              <p className="lead mb-5">Proactive, talented communicator well-versed in all aspects of software development. Results-oriented with more than 1.5 years of experience in IT industry. Solidifies client relations and growth through improved workflows and enhanced features. I currently work as App developer but looking for a full stack field where i can sharpen my client as well as backend skills.</p>
                              <div className="social-icons">
                                  <a className="social-icon" href="https://www.linkedin.com/in/avichalsrivastava/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                  <a className="social-icon" href="https://github.com/AvichalSrivastava" target="_blank"><i className="fab fa-github"></i></a>
                                  <a className="social-icon" href="https://stackoverflow.com/users/12774726/avichal-srivastava/" target="_blank"><i className="fab fa-stack-overflow"></i></a>
                                  <a className="social-icon" href="https://www.instagram.com/avichal_srivastav/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                              </div>
                          </div>
                      </section>
                     <hr className="m-0" />
                      <section className="resume-section" id="education">
                          <div className="resume-section-content">
                              <h2 className="mb-5">Experience</h2>
                              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                  <div className="flex-grow-1">
                                      <h3 className="mb-0">Adda 52 Poker</h3>
                                      <div className="subheading mb-3">India's first and largest online Poker gaming app and website</div>
                                      <span className="text-primary">Software Engineer</span>
                                  </div>
                                  <div className="flex-shrink-0"><span className="text-primary">Feb 2019 - Current</span></div>
                              </div>
                          </div>
                      </section>
                      <hr className="m-0" />
                      <section className="resume-section" id="experience">
                          <div className="resume-section-content">
                              <h2 className="mb-5">My Projects</h2>
                              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                  <div className="flex-grow-1">
                                      <h3 className="mb-0">Manager app (Android)</h3>
                                      <div className="subheading mb-3">React Native app with Redux framework that uses Firebase authentication and firebase real time database for login and data store purposes.</div>
                                      <p>The theme of the app is , it is a manager - employee app. Where managers can create there employee records and can schedule them for working days accordingly. Manager can add, fire, schedule his working day and message them the schedule respectively.</p>
                                     <a href="https://github.com/AvichalSrivastava/EmployeeManagerApp" target="_blank">FIND GIT CODE HERE -</a>
                                     <a  href={Manager} download>- Download the app</a>
                                  </div>
                                  <div className="flex-shrink-0"><span className="text-primary">React-Native</span></div>
                              </div>
                              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                  <div className="flex-grow-1">
                                      <h3 className="mb-0">Chatting web app</h3>
                                      <div className="subheading mb-3">It is a combination of Express server and Socket.io</div>
                                      <p>This web app is a chatting app which allows you to broadcast your message to every connected client. So now you can chat and express your feelings without thinking of your identity. By the way, it better works with desktop or laptop.</p>
                                      <p><span className="text-primary">Open the website in 2 tabs into your browser. Start messaging from one tab, the other tab will be receiving your message and vice-versa.</span></p>
                                      <a href="https://github.com/AvichalSrivastava/ChattingAppServer" target="_blank">FIND GIT CODE HERE -</a>
                                     <a  href="https://kayasthchattingapp.herokuapp.com/" target="_blank">- Open website here.</a>
                                  </div>
                                  <div className="flex-shrink-0"><span className="text-primary">Express and Socket.io</span></div>
                              </div>
                              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                  <div className="flex-grow-1">
                                      <h3 className="mb-0">Music album app</h3>
                                      <div className="subheading mb-3">React Native simple app</div>
                                      <p>Simple react native app with albums and there amazon buy links. just Taylor Swift albums with there amazon buy links.</p>
                                      <a href="https://github.com/AvichalSrivastava/musicReactNativeApp" target="_blank">FIND GIT CODE HERE -</a>
                                     <a  href="https://kayasthchattingapp.herokuapp.com/" target="_blank">- Download the app</a>
                                  </div>
                                  <div className="flex-shrink-0"><span className="text-primary">React Native</span></div>
                              </div>
                              <div className="d-flex flex-column flex-md-row justify-content-between">
                                  <div className="flex-grow-1">
                                      <h3 className="mb-0">My Portfolio website</h3>
                                      <div className="subheading mb-3">React with particle.js library for random motions (just what are you seeing on screen)</div>
                                      <p>My personal website that are you currently watching.</p>
                                      <a href="https://github.com/AvichalSrivastava/myPortfolio" target="_blank">FIND GIT CODE HERE -</a>
                                  </div>
                                  <div className="flex-shrink-0"><span className="text-primary">React and Particle.js</span></div>
                              </div>
                          </div>
                      </section>
                      
                      <hr className="m-0" />
                    <section className="resume-section" id="skills">
                          <div className="resume-section-content">
                              <h2 className="mb-5">Skills</h2>
                              <div className="subheading mb-3">Programming Languages & Tools</div>
                              <ul className="list-inline dev-icons">
                              <div className="tech">
                                {this.renderDev()}
                              </div>

                              </ul>
                              <div className="subheading mb-3">Workflow</div>
                              <ul className="fa-ul mb-0">
                                  <li>
                                      <span className="fa-li"><i className="fas fa-check"></i></span>
                                      Mobile-First, Responsive Design
                                  </li>
                                  <li>
                                      <span className="fa-li"><i className="fas fa-check"></i></span>
                                      Cross Browser Testing & Debugging
                                  </li>
                                  <li>
                                      <span className="fa-li"><i className="fas fa-check"></i></span>
                                      Cross Functional Teams
                                  </li>
                                  <li>
                                      <span className="fa-li"><i className="fas fa-check"></i></span>
                                      Agile Development & Scrum
                                  </li>
                              </ul>
                          </div>
                      </section>
                      <hr className="m-0" />
                      <section className="resume-section" id="interests">
                          <div className="resume-section-content">
                              <h2 className="mb-5">Interests</h2>
                              <p>Apart from being a software developer, I enjoy most of my time playing my guitar. In the winter, I am a</p>
                              <a href="https://www.instagram.com/p/B4kHvJNHfiJ/?utm_source=ig_web_copy_link">watch my the performance</a>
                              <p>I like A.I Gadgets. Also apart from these, i like explore places and trackings.</p>
                              <p className="mb-0">When indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in Full stack world.</p>
                          </div>
                      </section>
                      <hr className="m-0" />
                    <section className="resume-section" id="awards">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Awards & Certifications</h2>
                        <ul className="fa-ul mb-0">
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                Google Analytics Certified Developer
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                Mobile Web Specialist - Google Certification
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                1
                                <sup>st</sup>
                                Place - University of Colorado Boulder - Emerging Tech Competition 2009
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                1
                                <sup>st</sup>
                                Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                2
                                <sup>nd</sup>
                                Place - University of Colorado Boulder - Emerging Tech Competition 2008
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                1
                                <sup>st</sup>
                                Place - James Buchanan High School - Hackathon 2006
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                3
                                <sup>rd</sup>
                                Place - James Buchanan High School - Hackathon 2005
                            </li>
                        </ul>
                    </div>
                </section>
                  </div>
                  <div> <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossOrigin="anonymous"></script>
        <script src="js/scripts.js"></script></div>
                </div>
            </div>
        </div>
        </div> 
        );
  }
}
export default Body;
