'use client'
import { createContext, useEffect, useState } from 'react'

export const UserInfosContext = createContext({
  isLogged: false,
})

interface UserInfosProviderProps {
  children: React.ReactNode
}

export default function UserInfosProvider({
  children,
}: UserInfosProviderProps) {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    ;(async function () {
      const logged = await fetch('/api/isUserLogged', {
        cache: 'no-cache',
      }).then((res) => res.json())

      setIsLogged(logged)
    })()
  }, [])
  return (
    <UserInfosContext.Provider value={{ isLogged }}>
      {children}
    </UserInfosContext.Provider>
  )
}
