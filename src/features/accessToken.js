import {createContext, useContext, useState} from 'react'
// import ReactDOM from "react-dom/client";

export const AccessContext = createContext(null)
const useAccess = () => useContext(AccessContext)
export default useAccess

export const AccessProvider = ({children}) => {
  const [access, setAccess] = useState(
      {
        access:"no Access token yet",
      }
    )

  return (
    <AccessContext.Provider value={{ access, setAccess }}>
      {children}
    </AccessContext.Provider>
  )
}

