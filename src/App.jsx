import React, { useEffect, useState } from 'react'

const App = () => {
  const [users , setUsers] = useState(null)
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(res => {
      console.log(res);
      setUsers(res)
    })
    .catch((err)=>{
      console.log(err);
      setError(true)
      
    } ).finally(()=>{
      setLoading(false)
    })
  } , [] )
  return (
    <div >
      <h1>Welcome to React Api</h1>
      <div id='userdetail'>
      {loading && <h1>Loading...</h1> }
      {error && <p><h2>Error! </h2> Webpage Not Found</p> } 
      {users && users.map(item =>{
        return <p key={item.id}>
          <h2>Name: {item.name}</h2>
          <h4>Phone: {item.phone}</h4>
          <h4>E-mail: {item.email}</h4>
          <h5>City: {item.address.city}</h5>
          </p>
      })}  
      </div>
      
    </div>
  )
}

export default App