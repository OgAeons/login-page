import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Input from "../components/Input"
import { account } from "../lib/appwriteConfig"

function Register(props) {
    const [user, setUser] = useState({
        name: '',
        email: '', 
        password: ''
    })

    const navigate = useNavigate()

    async function registerUser(e) {
        e.preventDefault()
        try {
            const userId = Math.random().toString(36).substring(2, 9);
            console.log(userId);
            
            const newUser = await account.create(userId, user.email, user.password, user.name)
            console.log(newUser);
            navigate('/home')
            try {
                const sess = account.createSession(userId, user.password);
                console.log('Session created:', sess)
            } catch (sessionError) {
                console.error('Error creating session:', sessionError.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container-right">
            <div className="signup-container">
                <h2>Welcome!</h2>
                <p className="description-signup">Continue to Google or enter your details</p>
                <div className="Auth">
                    <button type="submit"><img src="./google.webp" alt="goole-logo" height={"25vh"}/>Sign in with Google</button>
                </div>
                <Input 
                    name="name"
                    placeholder="Username"
                    type="text"
                    user={user}
                    setUser={setUser}
                />
                <Input 
                    name="email"
                    placeholder="Email Address"
                    type="email"
                    user={user}
                    setUser={setUser}
                />
                <Input 
                    name="password"
                    placeholder="Password"
                    type="password"
                    user={user}
                    setUser={setUser}
                />
                <a href="" className="forgot">Forgot pasword?</a>
                <button onClick={(e) => {registerUser(e)}} className="submit" type="submit">Register</button>
                <p className="create-account">Already have an account? <Link to={`/`}>Sign In</Link></p>
            </div>
        </div>
    )
}

export default Register