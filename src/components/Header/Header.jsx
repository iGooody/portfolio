import React from 'react'
import Photo from '/src/images/Photo.jpg'

export const Header = () => {
  return (
    <>
        <img src={Photo} alt='Me' width="500" height="600" ></img>
        <h1> Hello! 👋 , my name is
        Anton Barziankou
        I'm a Frontend Web Developer</h1>
    </>
    
  )
}
