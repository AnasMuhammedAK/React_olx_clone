import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../Store/Context";
import {useHistory,Link} from 'react-router-dom'
import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory()
  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // alert("Logged In")
        history.push('/')
      }).catch((err)=>{
        console.log(err.message)
      })
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'><span style={{color:"black",marginRight:"10px"}}> Or </span> Signup</Link>
      </div>
    </div>
  );
}

export default Login;
