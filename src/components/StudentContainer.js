import React from "react";
import StudentList from './StudentList'
import Header from './Header'

class StudentContainer extends React.Component{
    state = {
        students: [
            {
                Matric: 1,
                Fullname: 'Olusare Adegbagi',
                Graduated: false,
            },

            {
                Matric: 2,
                Fullname: 'Lateef Obinna',
                Graduated: true, 
            },

            {
                Matric: 3,
                Fullname: 'Jose Banks',
                Graduated: true,
            },

            {
                Matric: 4,
                Fullname: 'Grace Etukumo',
                Graduated: false,
            }
        ],

        description: 'This is a student management app!'
    }
    render(){
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
            
            <div>
                <Header />
                <StudentList students = {this.state.students}/>
                
            </div>
        )
    }
}
export default StudentContainer;