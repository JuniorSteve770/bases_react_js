import React, { Component } from 'react';
import firebase from './Firebase';

class Login extends Component {
    constructor(props) {
      super(props);

    // here we bind our methods
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      this.state = {
        email: '',
        password: ''
      };
    }

      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
// Loggin function that take the user settings and logs him in
      login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
          });
      }
// sign up function that take the user sttings and create his account since it des not exist
      signup(e){
            e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            }).then((u)=>{console.log(u)})
            .catch((error) => {
            console.log(error);
          })
      }
      render() {
      return (
       <div className="col-md-6">
       <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"  
            class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">Made by the big K.K.A.P</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" 
            class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <br/><br/>
       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
       <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
    </form>

    <br/><br/><br/>
    <br/><br/><br/>

 </div>
    );
  }
}
export default Login;

