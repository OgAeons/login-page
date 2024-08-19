import React from "react"
import {Link} from "react-router-dom"

function Login() {
    return (
        <div className="body">
            <div className="container-left">
                <div className="logo">
                    <h1 className="title">A i M</h1>
                    <div className="line"></div>
                    <p className="title-p">Artificial Intelligence Medicare</p>
                </div>
                <p className="description">Welcome to a new era of healthcare!<br />Log in to unlock a world where Ai anticipates your needs,<br />personalizes your wellness journey,<br />and brings advanced care to your fingertips.</p>
                <div className="line-p"></div>
                <img className="cover-img" src="./public/cover-img.png" alt="cover-img" />
            </div>
            <div className="container-right">
                <div className="signup-container">
                    <h2>Welcome Back!</h2>
                    <p className="description-signup">Continue to Google or enter your details</p>
                    <div className="Auth">
                        <button type="submit"><img src="./public/google.webp" alt="goole-logo" height={"25vh"}/>Sign in with Google</button>
                    </div>
                    <label for="email" className="label">Email</label>
                    <input type="email" placeholder="Email Address" name="email" required/>
                    <label for="password" className="label">Password</label>
                    <input type="text" placeholder="Password" name="password" required/>
                    <a href="" className="forgot">Forgot pasword?</a>
                    <button className="submit" type="submit">Login</button>
                    <p className="create-account">Don't have an account? <Link to={`/register`}>Sign Up for Free</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login