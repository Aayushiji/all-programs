import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  // console.log(data)

  return (
    <div>
      <h1>Get API  Call</h1>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          data.map((item)=>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
          )
        }
      </table>
    </div>
  );
}

export default App;
