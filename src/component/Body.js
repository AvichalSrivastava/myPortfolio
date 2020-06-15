import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Varient from './Animation/Varient';
import Card from './Common/Card';
//import "./Animation/styles.css";
import profilePic from '../Pic/profilePic.png'
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
import 'bootstrap/dist/css/bootstrap.min.css';
class Body extends Component
{
  render()
  {
    return (
      <div>
         <div className="bg-dark-white">
          <Container fluid>
          <Row>
           <Col xs="3">
           <div class="flipcard">
             <div class="flipcardinner">
               <div class="flipcardfront shadow-5">
                 <img src={profilePic} alt="Avatar" className="img"/>
               </div>
               <div class="flipcardback grow shadow-5 ">
                 <h1>Avichal Srivastava</h1>
                 <p>Software Developer</p>
                 <p>Junior Engineer</p>
               </div>
             </div>
           </div>
           <div>
            <Card img={cSharp}/>
             <Card img={react}/>
             <Card img={reactNative}/>
             <Card img={express}/>
             <Card img={java}/>
             <Card img={redux}/>
             <Card img={node}/>
             <Card img={mongo}/>
           </div>
           </Col>
           <Col xs="9">

           </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          </Container>
          </div>
      </div>
    );
  }
}
export default Body;
