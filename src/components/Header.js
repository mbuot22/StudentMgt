import React from 'react'

function Header() {

  const headerStyle = {
    padding: "200px 0",
    lineHeight: '1.5rem'
  }
  return (
    <header style={headerStyle}>
    <div><h1 
    style={{
        fontSize: "6rem",
        fontWeight: "600",
        marginBottom: "2rem",
        lineHeight: "1em",
        color: "#ececec",
        textTransform: "lowercase",
        textAlign: "center",
    }}>
      Welcome to Torilo Student Management App.</h1></div>
      </header>
  )
}

export default Header