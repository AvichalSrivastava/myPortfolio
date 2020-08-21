import React,{Component} from 'react';
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';

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
