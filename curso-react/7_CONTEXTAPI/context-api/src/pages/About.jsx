import React from 'react'


import { useTitleColorContext } from '../hooks/useTitleColorContext'

export const About = () => {

  const {color} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>About</h1>
    </div>
  )
}
