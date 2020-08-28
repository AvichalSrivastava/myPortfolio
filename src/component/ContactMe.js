
import React, {Component} from 'react';
const axios = require('axios');
class ContactMe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: '',
        ResponseData:[]
      }
    }
  
    UNSAFE_componentWillMount()
    {
        console.log("state",this.state.name , this.state.email, this.state.message);
    }

  render() {
   return(
     <div className="App">
     <form id="contact-form" action="mailto:srivastava.avichal@gmail.com" method="post" enctype="text/plain" onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={this.state.name} name="Name" onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} name="Email" onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={this.state.message} name="Message" onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn btn-primary" name="Submit">Submit</button>
      </form>
      </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
   async mailer()
   {
     
      var data = 
      {
        name : this.state.name,
        email : this.state.email,
        message : this.state.message
      }
     
      console.log(data); 
      await axios.post('http://localhost:3001/api/send',data,{headers: { 'Content-Type': 'application/json' }})
      .then((response)=> {
        console.log(response);
        this.setState({ResponseData : response});
      })
      .catch(function (error) {
        console.log(error);
      });
      
   }

   async functionName() {
     
     var data = this.state;
     console.log(data);
    await axios.post('https://kayasthchattingapp.herokuapp.com/api/send', data, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'method':'post' }})
    .then(function (response) 
    {
      console.log(response);
    }).catch((ex)=>
    {
      console.log(ex);
    });
  }

    async handleSubmit(event) 
    {
        event.preventDefault();
        this.functionName();
        console.log("ResponseData : ",this.state.ResponseData);
    }
  }
  
  export default ContactMe;