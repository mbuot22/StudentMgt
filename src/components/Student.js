import React from 'react'
import styles from './Student.module.css'
class Student extends React.Component{

handleEditing = () => {
  console.log(`${this.props.student.fullname} has double-clicked`)
}

render(){
  const graduatedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'Line-through'
  }
  // const {graduated, matric, fullname} = this.props.student
  return (
    // <div>Student</div>
    <li className={styles.student}>
        <div onDoubleClick={this.handleEditing}>
        <input className={styles.checkbox}
            type='checkbox'
            checked= {this.props.student.graduated} 
            onChange={() => this.props.handleChangeProps(this.props.student.matric)}
          />
          <span style={this.props.student.graduated ? graduatedStyle : null}>
            {this.props.student.fullname}
          </span>

          <button onClick={() => this.props.delStudentProps(this.props.student.matric)}>Delete</button>
        </div>
    </li>
   )
 }
}

export default Student