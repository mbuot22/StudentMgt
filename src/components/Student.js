import React from 'react'

class Student extends React.Component{

render(){
  return (
    // <div>Student</div>
    <li><input 
            type='checkbox'
            checked= {this.props.student.graduated} 
            // onChange={() => this.props.handleChangeProps(this.props.student.matric)}
            
        />
    {this.props.student.fullname}<button onClick={() => this.props.delStudentProps(this.props.student.matric)}>Delete</button></li>
   )
 }
}

export default Student