import React from 'react'
import './first.css'
import { Btn } from './Btn'

function First() {
  return (
    <>
    <h1 className='heading'>First Heading</h1>
    <h2 className='heading'>Second Heading</h2>
    
    <Btn btn_content="First"/>
    </>
  )
}

export default First