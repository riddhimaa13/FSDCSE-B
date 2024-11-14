import React from 'react'
import './student.css';
// import Student from './Student';


function Student(props) {
  return (
    <div className='icard'>
        <table>
            <tbody>
                <tr><td colSpan={2}>{props.college}</td></tr>
                <tr><td>{props.pic}</td></tr>
                <tr><td>Name:</td><td>{props.name}</td></tr>
                <tr><td>Branch:</td><td>{props.branch}</td></tr>
                <tr><td>Roll Number:</td><td>{props.roll}</td></tr>
                <tr><td>Section:</td><td>{props.section}</td></tr>

            </tbody>
            {/* <tr><td colSpan={2}></td></tr> */}
        </table>
        Student
    </div>
  )
}

export default Student