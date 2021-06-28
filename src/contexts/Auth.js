import React, { useState, useEffect } from 'react'
import { auth, firestoreDb } from '../base'

export const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { uid } = user

                let userDocRef = firestoreDb.collection('data').doc(uid)
                userDocRef.onSnapshot((doc) => {
                    setCurrentUser({...doc.data()})
                })
            }
        })
    },[])

    return (
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </AuthContext.Provider>
    )
}