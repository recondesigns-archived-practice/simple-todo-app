import React, { useState } from 'react'

export const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <AuthContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </AuthContext.Provider>
    )
}