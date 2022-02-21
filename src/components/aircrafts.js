import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import axios from "axios";

const Aircrafts = ({items,getFilters}) => {
    const [isChecked, setIsChecked] = useState(true);
    const automaticDequeue = async (e)=>{
        const result = await axios.post(
            `http://localhost:8888/aircrafts/dequeue/`);
          window.location.reload(false);
    }
    const dequeueSingle = async (id)=>{
        
        const result = await axios.post(
            `http://localhost:8888/aircrafts/dequeue/${id}`);
          window.location.reload(false);
    }
    const onChange = (e) => {
    setIsChecked(e)
    getFilters(isChecked)
      }
    return (
        <div>
         <section className='cards'>
         <Row className="align-items-center">
             <h1 style={{textAlign:'center'},{margin:'10px'}} >Aircrafts In The System</h1>
             <form>
                 Show Departed planes 
                <span style={{padding:'20px'}}> <input
        type="checkbox"
        onChange={(event) => onChange(event.currentTarget.checked)}
        checked={isChecked}
        
      /></span>
      
             </form>
        </Row>
        <Row> <button onClick={automaticDequeue}>auto Dequeue</button></Row>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Size</th>
      <th scope="col">Status</th>
      <th scope="col">Priority</th>
      <th scope="col">Dequeue</th>
    </tr>
  </thead>
  <tbody>
  {items.map((item) => (
        <tr  key={item.id} item={item} >
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.type}</td>
        <td>{item.size}</td>
        <td>{item.status}</td>
        <td>{item.priority}</td>
        <td><button onClick={()=>dequeueSingle(item.id)}>Dequeue</button></td>
        
      </tr>
      ))}

  </tbody>
</table>
    </section> 
        </div>
    )
}

export default Aircrafts
