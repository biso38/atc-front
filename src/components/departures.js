import React from 'react'
import { Row } from 'react-bootstrap';
import axios from "axios";
const departures = ({departuresItems}) => {
    const automaticDepart = async (e)=>{
        const result = await axios.post(
            `http://localhost:8888/departures/depart/`);
          window.location.reload(false);
    }
    return (
        <div>
         <section className='cards'>
         <Row className="align-items-center">
             <h1 style={{textAlign:'center'},{margin:'10px'}} >Aircrafts Waiting To Depart</h1><button onClick={automaticDepart}>auto Depart</button>
         </Row>    
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Size</th>
      <th scope="col">Status</th>
      <th scope="col">Priority</th>
    </tr>
  </thead>
  <tbody>
  {departuresItems.map((item) => (
        <tr  key={item.id} item={item} >
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td>{item.size}</td>
        <td>{item.status}</td>
        <td>{item.priority}</td>
        
      </tr>
      ))}

  </tbody>
</table>
    </section> 
        </div>
    )
}

export default departures
