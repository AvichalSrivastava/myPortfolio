import React,{Component} from 'react';
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';
import {modeChange} from './action';
import {connect} from 'react-redux';
class App extends Component {
  render()
  {
    return (
      <div className={this.props.mode}>
      <Header/>
      <Body/>
      <Footer/>
      </div>
    );
  }
}
const mapStateToProps = state =>
{
  console.log(state);
  const {mode} = state.Mode;
  return ({mode});
};
export default connect(mapStateToProps)(App);
