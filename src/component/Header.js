import React, {Component} from 'react';
import 'tachyons';
import "./common.css";
import profilePic from '../Pic/profilePic.png'
import "./newComm.css";
import ToggleSwitch from './ToggleSwitch';

const text = ["Night", "Day"];
const chkID = "checkboxID";
class Header extends Component {

render()
{
   
    return(
        <div >
            <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Avichal Srivastava</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePic} alt="" /></span>
                </a>
                <div> <ToggleSwitch id={chkID} Text={text} disabled={false} Name="Mode"/></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Experience</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Projects</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </div>
      );
}
  
}

export default Header;
