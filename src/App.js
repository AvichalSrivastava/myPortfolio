import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';
import Varient from './component/Animation/Varient';
//import './index.css'

class App extends Component {
  render()
  {
    return (
      <div>
      <Header/>
      <Body/>
      <Footer/>
      </div>
    );
  }
}

export default App;
