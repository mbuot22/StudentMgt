import React from 'react';
class StudentInput extends React.Component{
    state = {
        fullname:'',
        // email: ''
    }
    
    onChange = e => {
        this.setState(
            {
                // fullname: e.target.value
                // email: e.target.value
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.fullname)
        if(this.state.fullname.trim()){
            this.props.addStudentProps(this.state.fullname);
            this.setState({
                fullname: ''
            })
        }else{
            alert('Please enter an appropriate name')
        }
    }

    render(){
        // const {graduated, matric, fullname} = this.props.student
        return(
            <form onSubmit={this.handleSubmit} className='form-container'>
            <input
                className='input-text' 
                type = "text" 
                placeholder = 'Add new student'
                value={this.state.fullname}
                onChange={this.onChange}
                name="fullname"
            />
            
            {/* <input 
                type = "email" 
                placeholder = 'Add new student'
                value={this.state.email}
                onChange={this.onChange}
                name="email"
            /> */}
                <button className='input-submit'>Submit</button>
            </form>
        )
    }
}
export default StudentInput