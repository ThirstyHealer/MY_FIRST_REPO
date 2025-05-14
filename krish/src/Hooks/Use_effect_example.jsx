import React, { useEffect } from 'react'
import { useState } from 'react'

const UseEffectExample = () => {
    const [timer,setTimer] = useState( new Date());
    useEffect(()=>{
      const timeOut =   setInterval(()=>{
            setTimer(new Date(),1000)
        })
        return () => clearInterval(timeOut);
    },[])

     
  return (
    <div>
        <h1>Date</h1>
        {timer.toLocaleTimeString()}
    </div>
  )
}

 export const UserFetchData = ()=>{
    const [user,setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (res)=>{
                return res.json()
            }
        ).then((data)=>{
            console.log(data)
            setUser(data)
        })
    },[])
    return (
        <>
        <h1>User list</h1>
      <ul>
       ` {
              
              <ul>
                {
                    user.map(({ id, name, username }) => {
                    return <li key={id}>name: {name} username: {username}</li>;
                    })
                }
                </ul>

            }
        
      </ul>
        </>
    )
}

export default UseEffectExample