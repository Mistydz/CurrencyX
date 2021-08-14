import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Crypto.css';

function Crypto() {
    const [dbList, setDbList] = useState([])
    const [classList, setClassList] = useState([])
    const [isFetching, setFetching] = useState(true);
    const [isFetchingc, setFetchingc] = useState(true);



    useEffect(() => {
      async function fetchData()  {
        Axios.get(`/api/crypto?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
            setDbList(response.data);
            setFetching(false);
            setTimeout(fetchData, 4000); // Change the numeric value for the frequency you want to call the api and update your price value with 
          });
      }

      fetchData();
    }, []);

    useEffect(() => {
      async function fetchClass()  {
        Axios.get(`/api/cryptoups?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
          setClassList(response.data.data);
            setFetchingc(false);
            setTimeout(fetchClass, 4000); // Change the numeric value for the frequency you want to call the api and update your price value with 
          });
      }

      fetchClass();
    }, []);


    if (!dbList || !classList){
      return (<div className='container p-5'><h3>no data ..</h3>
        <br/> <h3>try again later</h3>
      </div>)
    }

    if (isFetching || isFetchingc) {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
            <div className="container">
              <a className="navbar-brand ml-5" href="/"><i className="fab fa-cloudscale"></i>  JetZ</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav ml-auto mr-5 mb-2 mb-lg-0">
                  <li className="nav-item ml-5">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item ml-5">
                    <a className="nav-link" href="/info">Website info</a>
                  </li>
                  <li className="nav-item mr-5 ml-5">
                    <a className="nav-link" href="/admin">Control Panel</a>
                  </li>
                </ul>
              </div>
            </div>
            </nav>
        <div className="d-flex justify-content-center mt-5" style={{paddingTop:'180px'}}>
        <div className="spinner-border" style={{width: '5rem',height: '5rem',fontSize:'80px'}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
        </div>
      </div>);
    }


    return(
 <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
<div className="container">
  <a className="navbar-brand ml-5" href="/"><i className="fab fa-cloudscale"></i>  JetZ</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsExample07">
    <ul className="navbar-nav ml-auto mr-5 mb-2 mb-lg-0">
      <li className="nav-item ml-5">
        <a className="nav-link" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item ml-5">
        <a className="nav-link" href="/info">Website info</a>
      </li>
      <li className="nav-item mr-5 ml-5">
        <a className="nav-link" href="/admin">Control Panel</a>
      </li>
    </ul>
  </div>
</div>
</nav>
<main className="mt-sm-5">
<div className="container mt-3">
<div className="row">
<div className="col-sm table-responsive animated animatedFadeInUp fadeInUp">
<table className="table table-ligth table-bordered border-dark">
<caption>Today's Cryptocurrency Prices by Market Cap</caption>
<thead className="table-info">
<tr>
<th scope="col">#</th>
<th scope="col">Price</th>
<th scope="col">24h %</th>
<th scope="col">7d %</th>
<th className="d-none d-md-table-cell" scope="col">Market Cap</th>
<th className="d-none d-lg-table-cell" scope="col">Volume(24h)</th>
<th className="d-none d-lg-table-cell" scope="col">Circulating Supply</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="bitcoin" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/> Bitcoin</th>
<td>{dbList.result[0].price}</td>
<td style={{color: classList[0].class.includes('down') ? 'red' : 'green'}}><span className={( classList[0].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[0].day}</td>
<td style={{color: classList[1].class.includes('down') ? 'red' : 'green'}}><span className={( classList[1].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[0].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[0].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[0].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[0].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="ethereum" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>Etheruem</th>
<td>{dbList.result[1].price}</td>
<td style={{color: classList[2].class.includes('down') ? 'red' : 'green'}}><span className={( classList[2].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[1].day}</td>
<td style={{color: classList[3].class.includes('down') ? 'red' : 'green'}}><span className={( classList[3].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[1].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[1].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[1].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[1].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/852.png" alt="tether" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/> Tether</th>
<td>{dbList.result[2].price}</td>
<td style={{color: classList[4].class.includes('down') ? 'red' : 'green'}}><span className={( classList[4].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[2].day}</td>
<td style={{color: classList[5].class.includes('down') ? 'red' : 'green'}}><span className={( classList[5].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[2].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[2].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[2].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[2].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" alt="binance" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>Binance</th>
<td>{dbList.result[3].price}</td>
<td style={{color: classList[6].class.includes('down') ? 'red' : 'green'}}><span className={( classList[6].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[3].day}</td>
<td style={{color: classList[7].class.includes('down') ? 'red' : 'green'}}><span className={( classList[7].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[3].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[3].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[3].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[3].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" alt="cardano" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>Cardano</th>
<td>{dbList.result[4].price}</td>
<td style={{color: classList[8].class.includes('down')? 'red' : 'green'}}><span className={( classList[8].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[4].day}</td>
<td style={{color: classList[9].class.includes('down') ? 'red' : 'green'}}><span className={( classList[9].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[4].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[4].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[4].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[4].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" alt="xrp" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>XRP</th>
<td>{dbList.result[5].price}</td>
<td style={{color: classList[10].class.includes('down') ? 'red' : 'green'}}><span className={( classList[10].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[5].day}</td>
<td style={{color: classList[11].class.includes('down') ? 'red' : 'green'}}><span className={( classList[11].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[5].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[5].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[5].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[5].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" alt="dodgecoin" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>Dodgecoin</th>
<td>{dbList.result[6].price}</td>
<td style={{color: classList[12].class.includes('down') ? 'red' : 'green'}}><span className={( classList[12].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[6].day}</td>
<td style={{color: classList[13].class.includes('down') ? 'red' : 'green'}}><span className={( classList[13].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[6].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[6].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[6].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[6].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png" alt="usd" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>USD Coin</th>
<td>{dbList.result[7].price}</td>
<td style={{color: classList[14].class.includes('down') ? 'red' : 'green'}}><span className={( classList[14].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[7].day}</td>
<td style={{color: classList[15].class.includes('down') ? 'red' : 'green'}}><span className={( classList[15].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[7].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[7].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[7].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[7].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" alt="polkadot" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>Polkadot</th>
<td>{dbList.result[8].price}</td>
<td style={{color: classList[16].class.includes('down') ? 'red' : 'green'}}><span className={( classList[16].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[8].day}</td>
<td style={{color: classList[17].class.includes('down') ? 'red' : 'green'}}><span className={( classList[17].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[8].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[8].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[8].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[8].circulatingSupply}</td>
</tr>
<tr>
<th scope="row"><img className="d-none d-sm-table-cell" src="https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png" alt="uniswap" style={{height:'18px',width:'18px',borderRadius: '12px',marginBottom: '4px',marginRight: '5px'}}/>Uniswap</th>
<td>{dbList.result[9].price}</td>
<td style={{color: classList[18].class.includes('down') ? 'red' : 'green'}}><span className={( classList[18].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[9].day}</td>
<td style={{color: classList[19].class.includes('down') ? 'red' : 'green'}}><span className={( classList[19].class.includes('down') ? 'arrow-down' : 'arrow-up')}></span>{dbList.result[9].week}</td>
<td className="d-none d-md-table-cell" >{dbList.result[9].marketCap}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[9].volume}</td>
<td className="d-none d-lg-table-cell" >{dbList.result[9].circulatingSupply}</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>



</main>
</div>
    )
}

export default Crypto;