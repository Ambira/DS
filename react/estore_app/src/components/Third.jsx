import React from 'react'
import Btn from './Btn'

export const Third = () => {
  return (
    <>
    <table>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            </tr>

            <tr>
                <td>Hello</td>
                <td>World</td>
                <td>helloworld@gmail.com</td>


            </tr></table>
            
            
            <Btn btn_content= "Third"/>
            </>
  )
}

export const Test =()=>{
    return(
        <>
        <form action=''>
        <label htmlFor="fname">First Name</label>
        <input type="text" name='fname'/>
        </form>
        </>
    )
}

