import React from 'react'
import Student from './Student'
class StudentList extends React.Component{
  render(){
    // const {graduated, matric, fullname} = this.props.student
    return (
           // <div>StudentList</div>
//         <ul>
//                     {this.props.students.map(
//                             student => (
//                                 <li>{student.Fullname}</li>
//                             )
//                         )
//                     }
//                 </ul>
//        )
//     }
// }
         <ul>
            {this.props.students.map(student => (
                <Student key={student.matric} student={student} handleChangeProps={this.props.handleChangeProps} delStudentProps={this.props.delStudentProps}/>
                    ))}
        </ul>
       )
    }
}
    


export default StudentList