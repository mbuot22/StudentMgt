import React from 'react'
class StudentList extends React.Component{
  render(){
    return (
    // <div>StudentList</div>
        <ul>
                    {
                        this.props.students.map(
                            student => (
                                <li>{student.Fullname}</li>
                            )
                        )
                        
                    }
                </ul>
       )
    }
}
    


export default StudentList