// import { useState } from "react"

import { useRef } from "react"

const Uncontrolledform = ()=>{

    const nameref = useRef(null)
    const emailref = useRef(null)
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log("name :",nameref.current.value)
        console.log("email : ",emailref.current.value)
        nameref.current.style.backgroundColor = "red"
        nameref.current.style.height = "100px"
        emailref.current.style.backgroundColor = "teal"
        emailref.current.style.height="100px"
    }

    return(
        <>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={handlesubmit}>
            <input ref={nameref} type="text" placeholder="enter your name" />
            <input ref={emailref} type="email" placeholder="enter your email"/>
            <button type="submit">submit</button>
        </form>
        </>
    )
}

export default Uncontrolledform