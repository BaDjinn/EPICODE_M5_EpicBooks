import React, { createContext, useEffect, useState } from 'react'

export const Library = createContext()

const PostContext = ({children}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const getAllBooks = async() => {
    try {
        setLoading(true)
        const response = await fetch('https://epibooks.onrender.com');
        setBooks( await response.json());
        setLoading(false);

    } catch (error) {
        setErrors(error)
    }
  }
  useEffect(()=>{
    getAllBooks();
  },[])

  return (
    <Library.Provider value={{books, loading, errors}}>
        {children}    
    </Library.Provider>
        
  )
}




export default PostContext