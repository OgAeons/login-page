import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./routes/Login"
import Register from "./routes/Register"
import Cover from "./routes/Cover"

function App() {
    return (
        <Router>
            <div className="body">
                <Cover />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes> 
            </div>
            
        </Router>
    )
}

export default App