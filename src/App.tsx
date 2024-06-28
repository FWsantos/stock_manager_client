import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  axios.get('http://localhost:3001/products').then((response) => {
    console.log(response.data)
  });

  return (
    <>
      
    </>
  )
}

export default App
