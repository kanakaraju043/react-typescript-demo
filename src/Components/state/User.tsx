import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'raju',
            email: 'raju@gmail.com'
        })

    }

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User name is {user?.name}</p>
    </div>
  )
}

export default User