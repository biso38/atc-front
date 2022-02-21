
import './App.css';
import Aircrafts from './components/aircrafts';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Departures from './components/departures';
import Add from './components/add'
const App = () => {
  const [items,setItems]= useState([])
  const [isLoading,setIsLoading]= useState(true)
  const [addAc,setAddAC]= useState('')
  const [departuresItems,setDepartureItems]=useState([])
  const [filter,setFilter]= useState('')
  useEffect(() => {
  const fetchItems = async () => {
    const result = await axios(`http://localhost:8888/aircrafts/all?standby=${filter}`)
   
    setItems(result.data)
    setIsLoading('false')
  }
  const fetchDepartures =  async ()=> {
    const result = await axios(`http://localhost:8888/departures/all`)
    setDepartureItems(result.data)
    setIsLoading('false')
  }
  
  fetchItems()
  fetchDepartures()
  
  },[filter,addAc])
  
  return (
    <div className="container">
     <Add addAc={(f)=>{setAddAC(f)}}/>
     <Aircrafts isLoading={isLoading} getFilters={(f)=>{setFilter(f)}} items={items}/>
     <Departures isLoading={isLoading} departuresItems={departuresItems}/>
    </div>
  );
}

export default App;
