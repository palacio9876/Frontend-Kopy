import React, {createContext,useState} from 'react'

export const contextKopy =  createContext();

export default function ContextCart({children}){

    const [amount,setAmount] = useState(0);
    
  return <contextKopy.Provider value={{amount,setAmount}}>
        {children}
    </contextKopy.Provider>
  
}
