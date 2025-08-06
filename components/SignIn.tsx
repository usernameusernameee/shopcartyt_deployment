import React from 'react'
import { SignInButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <span className="text-sm font-semibold
    hover:text-darkColor text-lightColor
      hover:cursor-pointer hoverEffect">
        Login
      </span>
    </SignInButton>
    
  )
}

export default SignIn;
