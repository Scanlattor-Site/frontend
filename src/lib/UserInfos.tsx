'use client'
import isUserLogged from '@/actions/isUserLogged'
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
      const logged = await isUserLogged()
      setIsLogged(logged)
    })()
  }, [])
  return (
    <UserInfosContext.Provider value={{ isLogged }}>
      {children}
    </UserInfosContext.Provider>
  )
}
