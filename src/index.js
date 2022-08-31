import React from 'react';
import ReactDOM  from 'react-dom';
import StudentContainer from './components/StudentContainer';
import './App.css'


// const element = <h1>Welcome to Torilo Student Management App!</h1>;
ReactDOM.render(
    <React.StrictMode>
        <StudentContainer />
    </React.StrictMode>,
document.getElementById('root'));
