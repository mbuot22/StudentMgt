import React from 'react'

function Student() {
  return (
    // <div>Student</div>
    <li><input 
            type='checkbox'
            checked= {this.props.students.graduated} 
            onChange={() => console.log('clicked')}
        />
    {this.props.Fullname}</li>
  )
}

export default Student