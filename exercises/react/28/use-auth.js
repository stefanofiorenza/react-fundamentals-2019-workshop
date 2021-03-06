import React, { useContext, useState, createContext, useMemo } from 'react'

const AuthContext = createContext()

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

const AuthProvider = props => {
  const [loggedInUserName, setLoggedInUserName] = useState('')

  const authContext = useMemo(() => {
    return {
      loggedInUserName,
      setLoggedInUserName,
    }
  }, [loggedInUserName])

  const { children, ...otherProps } = props

  return (
    <AuthContext.Provider value={authContext} {...otherProps}>
      {children}
    </AuthContext.Provider>
  )
}

const wrapWithAuth = Component => {
  // TODO: can you implement wrapWithAuth
  // and then update 28.js so we use wrapWithAuth
  // rather than wrapping our app in the <AuthProvider>
  const WrappedComponent = props => {
    return Component
  }

  return WrappedComponent
}

export { useAuth, AuthProvider, wrapWithAuth }
