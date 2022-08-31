import React from 'react'
import styles from './Student.module.css'
class Student extends React.Component{
  state = {
    editing: false
  
  }

  
handleEditing = () => {
  // console.log(`${this.props.student.fullname} has been double-clicked`)
  this.setState({
    editing: true,
  })

}

render(){
  const graduatedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'Line-through'
  }
  const {graduated, matric, fullname} = this.props.student

  let viewMode= {}
  let editMode= {}
  if(this.state.editing){
    viewMode.display='none'
  }else{
    editMode.display='none'
  }


  return (
    // <div>Student</div>
    <li className={styles.student}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input className={styles.checkbox}
            type='checkbox'
            checked= {graduated} 
            onChange={() => this.props.handleChangeProps(matric)}
          />
          <span style={graduated ? graduatedStyle : null}>
            {fullname}
          </span>

          <button onClick={() => this.props.delStudentProps(matric)}>Delete</button>
        </div>
        <input 
          value={this.state.fullname}
          type ='text' 
          className = {styles.textInput} 
          style={editMode}
          onChange = {
            e => {
            this.props.setUpdate(e.target.value, matric)
          }}
        />
    </li>
   )
 }
}

export default Student