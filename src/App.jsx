import React from "react"

function App() {
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
                    <h2>Sign In to Artificial Intelligence Medicare</h2>
                    <p className="create-account">New here? <span>Create account</span></p>
                    <label for="email">Email</label>
                    <div className="input">
                        <img src="./public/email.png" alt="" height={"20rem"}/>
                        <input type="email" placeholder="Email Address" name="email"/>
                    </div>
                    <label for="password">Password</label>
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
        </div>
    )
}

export default App