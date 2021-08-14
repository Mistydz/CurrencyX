import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import './Panel.css';

function Panel() {
  const [newBuyPrice, setNewBuyPrice] = useState(0);
  const [newSellPrice, setNewSellPrice] = useState(0);
  const [dbList, setDbList] = useState([])
  const [isChanged, setIsChanged] = useState(false)
  const [isNtChanged, setIsNtChanged] = useState(false)
  const [isFetching, setFetching] = useState(true);



  useEffect(()=> {
    Axios.get(`/api/bmprice?api_key=${process.env.REACT_APP_API_KEY}`).then((response)=>{
      setDbList(response.data);
      setFetching(false);
    })
  }, [])


  const updateList = (_id) => {
    if(newBuyPrice!==0 && newSellPrice!==0){

      Axios.put(`/api/bmupdate?api_key=${process.env.REACT_APP_API_KEY}`, {
      _id: _id,
      newBuyPrice: (newBuyPrice),
      newSellPrice: (newSellPrice)
    })
    setIsChanged(true)
    setIsNtChanged(false)
    
    }else{
    setIsNtChanged(true)
    }
  }



  if (isFetching) {
    return (
      <div className="d-flex justify-content-center mt-5" style={{paddingTop:'180px'}}>
        <div className="spinner-border" style={{width: '5rem',height: '5rem',fontSize:'80px'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )}

  return (
    
    <div className="App">
<h1  style={{paddingBottom:  isChanged || isNtChanged ? '2px' : '39px'}}> Currency Conrtol Panel </h1>

<h2 style={{display:  isChanged ? 'block' : 'none', marginBottom: '11px' }}>The new BuyPrice is  <span style={{color: 'green'}}>{newBuyPrice}</span> and the SellPrice is  <span style={{color: 'green'}}>{newSellPrice}</span></h2>
<h4 style={{display:  isNtChanged ? 'block' : 'none', marginBottom: '13px' }}><span style={{color: 'red'}}>You have to update the sell and the buy value at the same time for it to work correctly</span></h4>
{dbList.map((val, key) =>{

  return (
  <div className="in" key={key}>

     <div className="inn">
      <h3 className="mt-3"> {val.currencyName}</h3>
      <input 
        type="number" 
        placeholder={val.buyPrice}
        onChange={(event) => {
          setIsChanged(false);
          setIsNtChanged(false);
          setNewBuyPrice(event.target.valueAsNumber);
        }}
      />
      <input 
        type="number" 
        placeholder={val.sellPrice}
        onChange={(event) => {
          setIsChanged(false);
          setIsNtChanged(false);
          setNewSellPrice(event.target.valueAsNumber);
        }}
      /> 
      <button className="pt-2 btn btn-primary" onClick={() => updateList(val._id)}>Update</button>   
     </div>
     
  </div>
  )
})}
          <a href='/'><button className="w-10 h-50 p-2 mb-3 mr-2 btn btn-lg btn-danger">Home</button><button className="w-10 h-50 p-2 mb-3 btn btn-lg btn-warning" onClick={() =>sessionStorage.removeItem('auth')}>Logout</button></a>
    </div>
  );
}

export default withRouter(Panel);