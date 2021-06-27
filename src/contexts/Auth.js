import React, { useState, useEffect } from 'react'
import { auth } from '../base'

export const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
            } else {
                console.log(`No users loggged in.`)
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </AuthContext.Provider>
    )
}