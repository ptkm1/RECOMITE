import { createContext, useState } from 'react'
import { IAuthentication } from './IAuthentication'

export const AuthenticationContext = createContext({} as IAuthentication)

export function AuthenticationLayer({ children }: any) {

  const [user,setUser]: any = useState()

  return (
    <AuthenticationContext.Provider value={{ authenticated: Boolean(user), user, setUser }} >
      {children}
    </AuthenticationContext.Provider>
  )

}