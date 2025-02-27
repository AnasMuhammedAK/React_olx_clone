import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/Context';
import { useHistory } from "react-router-dom";
import './Signup.css';

export default function Signup() {
	const history = useHistory()
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	const { firebase } = useContext(FirebaseContext)
	const handleSubmit = (e) => {
		e.preventDefault()
		firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
			result.user.updateProfile({ displayName: username }).then(() => {
				firebase.firestore().collection('users').add({
					id: result.user.uid,
					username: username,
					phone: phone
				}).then(() => {
					history.push("/login")
				})
			})
		})
	}

	return (
		<div>
			<div className="signupParentDiv">
				<img width="200px" height="200px" src={Logo}></img>
				<form onSubmit={handleSubmit}>
					<label htmlFor="fname">Username</label>
					<br />
					<input
						className="input"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						id="fname"
						name="name"
					// defaultValue="John"
					/>
					<br />
					<label htmlFor="email">Email</label>
					<br />
					<input
						className="input"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="email"
						name="email"
					// defaultValue="John"
					/>
					<br />
					<label htmlFor="lname">Phone</label>
					<br />
					<input
						className="input"
						type="number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						id="lname"
						name="phone"
					// defaultValue="Doe"
					/>
					<br />
					<label htmlFor="password">Password</label>
					<br />
					<input
						className="input"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						id="password"
						name="password"
					// defaultValue="Doe"
					/>
					<br />
					<br />
					<button> Signup </button>
					<Link to='/login'><span style={{color:"black",marginRight:"10px"}}> Or </span> Login</Link>
				</form>
			
			</div>
		</div>
	);
}