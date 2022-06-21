import React from 'react'
import Header from './Header'

function Main(props) {
    // const [show,setShow] = React.useState()

    const {user,age} = props
    console.log(user,age)
    // const myStyle={
    //     color:"blue",
    // }
  return (
    <div style={{backgroundColor:"bisque"}}>
        <div>Main</div>
        <h1>Component</h1>
        <Header/>
        {props.user}-{props.age}
    </div>
  )
}

export default Main