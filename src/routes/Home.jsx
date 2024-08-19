import React, { useState, useEffect } from 'react'
import { account } from "../lib/appwriteConfig"

function Home() {
    
    const [user, setUser] = useState()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await account.get()
                setUser(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchUserData()
    }, [])
    console.log(user);

    return (
        <div>
            <h1> Home Page </h1>
            <h6>Welcome, Username</h6>
            <div>
                <button>Logout</button>
                <button>Change Password</button>
            </div>
            <div>
                <h6>UID : {user.$id}</h6>
                <h6>Name : {user.name}</h6>
                <h6>Email : {user.email}</h6>
                <h6>Email Verified : {user.emailVerification ? 'Verified' : 'Not Verified'}</h6>
                <h6>Registered on :{ new Date(user.registeration * 1000).toDateString() } </h6>
            </div>
            <div>
            <button>Delete Account</button>
            </div>
        </div>
    )
}

export default Home