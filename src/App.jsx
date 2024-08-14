import React from "react"

function App() {
    return (
        <div className="container">
            <img src="" alt="" />
            <div className="signup-container">
                <h2>Sign In to Artificial Intelligence Medicare</h2>
                <h5>New here? <span>Create account</span></h5>
                <label for="email">Email</label>
                <div className="input">
                    <img src="" alt="" />
                    <input type="email" placeholder="Email Address" name="email"/>
                </div>
                <label for="email">Password</label>
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" placeholder="Password" name="password"/>
                </div>
                <h5>Forgot pasword?</h5>
                <button type="submit">Sign In</button>
                <div className="or">
                    <img src="" alt="" />
                    <p> OR </p>
                    <img src="" alt="" />
                </div>
                <div className="Auth">
                    <img src="" alt="" />
                    <button type="submit">Sign in with Google</button>
                </div>
                <div className="Auth">
                    <img src="" alt="" />
                    <button type="submit">Sign in with Facebook</button>
                </div>
                <div className="Auth">
                    <img src="" alt="" />
                    <button type="submit">Sign in with X</button>
                </div>
                
            </div>
        </div>
    )
}

export default App