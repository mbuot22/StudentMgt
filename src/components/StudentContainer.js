import React from "react";
import StudentList from './StudentList';
import Header from './Header';
import StudentInput from "./StudentInput";
import {v4 as uuidv4} from 'uuid'
// import '../App.css'

class StudentContainer extends React.Component{
    state = {

        students: [
            // {
            //     matric: 1,
            //     fullname: 'Olusare Adegbagi',
            //     graduated: false,
            // },

            // {
            //     matric: 2,
            //     fullname: 'Lateef Obinna',
            //     graduated: true, 
            // },

            // {
            //     matric: 3,
            //     fullname: 'Jose Banks',
            //     graduated: true,
            // },

            // {
            //     matric: 4,
            //     fullname: 'Grace Etukumo',
            //     graduated: false,
            // },

            // {
            //     matric: 5,
            //     fullname: 'James Okon',
            //     graduated: true,
            // },

            // {
            //     matric: 6,
            //     fullname: 'Sunday Egharevba',
            //     graduated: true,
            // },

            // {
            //     matric: 7,
            //     fullname: 'Ojo Rasaki',
            //     graduated: false,
            // },
        ],

        description: 'This is a student management app!'
    }
    // handleChange = (matric, fullname) => {
    //     console.log(`Student with matric ${matric} and ${fullname} clicked`)
    // }

    handleChange = (matric) => {
        this.setState(prevState => ({
            students: prevState.students.map( student => {
                if(student.matric === matric){
                    return{
                        ...student,
                        graduated: !student.graduated
                    }
                }
                return student
            }
            )
        }))
    }

    // delStudent = (matric) => {
    //     console.log(`Student with matric ${matric} has been deleted`)
    // }

    addStudent= (fullname) => {
        // console.log('added!')
        const newStudent= {
            matric: uuidv4(),
            fullname: fullname,
            graduated: false
        }
        this.setState({
            students: [
                ...this.state.students, newStudent] 
            })
            }


    delStudent = (matric) => {
        this.setState({
            students: [
                ...this.state.students.filter(student => {
                    return student.matric !== matric
                })
            ]
        })
    }
    
    render(){
        // const {graduated, matric, fullname} = this.props.student
        return(
            // <>
            //     <h1>Hello from Torilo world!</h1>
            //     <p>I am the parent component.</p>

            // </>
            // <ul>
            //     {
            //         this.state.students.map(
            //             student => (
            //                 <li>{student.Fullname}</li>
            //             )
            //         )
                    
            //     }
            // </ul>
            
            <div className="container">
                <div className="inner">
                <Header />
                <StudentInput addStudentProps = {this.addStudent} />
                <StudentList 
                    delStudentProps = {this.delStudent} 
                    handleChangeProps = {this.handleChange} 
                    descr = {this.state.description} 
                    students = {this.state.students}/>
                </div>
            </div>
        )
    }
}
export default StudentContainer;