import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { account } from "../lib/appwriteConfig"

function Home() {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await account.get()
                setUser(data)
            } catch (error) {
                console.log('Error fetching user data:', error.message)
                navigate('/')
            }
        }
        fetchUserData()
    }, [])

    async function handleLogout(e) {
        e.preventDefault()
        try {
            await account.deleteSession('current')
            navigate('/')
        } catch (error) {
            console.log('Error logging out:', error.message);
        }
    }

    if(user) {
        return (
            <div>
                <h1> Home Page </h1>
                <h6>Welcome, Username</h6>
                <div>
                    <button onClick={(e) => handleLogout(e)}>Logout</button>
                    <button>Change Password</button>
                </div>
                <div>
                    <h6>UID : {user?.$id || "N/A"}</h6>
                    <h6>Name : {user?.name || "N/A"}</h6>
                    <h6>Email : {user?.email || "N/A"}</h6>
                    <h6>Email Verified : {user.emailVerification ? 'Verified' : 'Not Verified'}</h6>
                    <h6>Registered on :{ new Date(user.registration * 1000).toDateString() } </h6>
                </div>
                <div>
                    <button>Delete Account</button>
                </div>
            </div>
        )
    } else {
        return <div>Please login first to view homepage</div>
    }
}

export default Home