import React from 'react'
import Navbar from '../NavBar/Navbar'

export default function Container({children}) {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
