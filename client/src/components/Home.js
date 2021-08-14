import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Home.css'


function Home() {


    useEffect(() =>{
      const localTheme = localStorage.getItem('theme');
      localTheme ? setTheme(localTheme) : setTheme('light');
    }, []);

    function setTheme(mode){
      var link = document.getElementsByTagName("link")[2];
      if(mode === 'light' ){
        link.setAttribute('href', `https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/simplex/bootstrap.min.css`)
      }
      
      if(mode === 'dark' ){
        link.setAttribute('href', `https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/darkly/bootstrap.min.css`)
      }
    
      if(mode === 'grey'){
        link.setAttribute('href', `https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css`)
      }
    
      if(mode === 'sketch'){
        link.setAttribute('href', `https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/sketchy/bootstrap.min.css`)
      }
    
      localStorage.setItem('theme', mode)
    }





  const [blackDa, setBlackDa] = useState([])
  const [officialDa, setOfficialDa] = useState([])
  const [officialUsd, setOfficialUsd] = useState([])

  const [isFetchingBda, setFetchingBda] = useState(true);
  const [isFetchingOda, setFetchingOda] = useState(true);
  const [isFetchingUsd, setFetchingUsd] = useState(true);

  


  useEffect(() => {
      Axios.get(`/api/bmprice?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
          setBlackDa(response.data);
          setFetchingBda(false);
        });
      
      Axios.get(`/api/srates?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
          setOfficialDa(response.data);
          setFetchingOda(false);
        });
      
      Axios.get(`/api/rates?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
          setOfficialUsd(response.data);
          setFetchingUsd(false);
        });
  } ,[]) 



  if (isFetchingBda || isFetchingOda || isFetchingUsd) {
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
                <a className="nav-link" aria-current="page" href="/crypto">Crypto</a>
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



        return (
          <div className="h">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
          <div className="container">
            <a className="navbar-brand ml-5" href="/"><i className="fab fa-cloudscale"></i>  JetZ</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav ml-auto mr-5 mb-2 mb-lg-0">
                <li className="nav-item ml-5">
                  <a className="nav-link" aria-current="page" href="/crypto">Crypto</a>
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
        <main>
        <div className="container mt-3">
  <div className="row mt-sm-5">
    <div className="col-lg animated animatedFadeInUp fadeInUp">
    <table className="table table-ligth table-borderless">
        <caption>Algerian Dinar BlackMarket Rates</caption>
  <thead className="table-danger">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Achat</th>
      <th scope="col">Vent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Euro</th>
      <td>{blackDa[0].buyPrice}</td>
      <td>{blackDa[0].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Dollar US</th>
      <td>{blackDa[1].buyPrice}</td>
      <td>{blackDa[1].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Dollar Canadien</th>
      <td>{blackDa[2].buyPrice}</td>
      <td>{blackDa[2].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Livre Sterling</th>
      <td>{blackDa[3].buyPrice}</td>
      <td>{blackDa[3].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Franc Suisse</th>
      <td>{blackDa[4].buyPrice}</td>
      <td>{blackDa[4].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Livre Turque</th>
      <td>{blackDa[5].buyPrice}</td>
      <td>{blackDa[5].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Yuan Chinois</th>
      <td>{blackDa[6].buyPrice}</td>
      <td>{blackDa[6].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Rial Saoudien</th>
      <td>{blackDa[7].buyPrice}</td>
      <td>{blackDa[7].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Dirham Emirati</th>
      <td>{blackDa[8].buyPrice}</td>
      <td>{blackDa[8].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Dinar Tunisien</th>
      <td>{blackDa[9].buyPrice}</td>
      <td>{blackDa[9].sellPrice}</td>
    </tr>
    <tr>
      <th scope="row">Dirham Marocain</th>
      <td>{blackDa[10].buyPrice}</td>
      <td>{blackDa[10].sellPrice}</td>
    </tr>
  </tbody>
</table>
    </div>
    <div className="col-lg animated animatedFadeInUp fadeInUp">
    <table className="table table-ligth table-borderless">
        <caption>Algerian Dinar Official Rates</caption>
  <thead className="table-warning">
    <tr>
      <th scope="col">#</th>
      <th scope="col">1 Da</th>
      <th scope="col">1# in Da</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Euro</th>
      <td>{officialDa.result[1].sell}</td>
      <td>{officialDa.result[1].buy}</td>
    </tr>
    <tr>
      <th scope="row">Dollar US</th>
      <td>{officialDa.result[3].sell}</td>
      <td>{officialDa.result[3].buy}</td>
    </tr>
    <tr>
      <th scope="row">Dollar Canadien</th>
      <td>{officialDa.result[4].sell}</td>
      <td>{officialDa.result[4].buy}</td>
    </tr>
    <tr>
      <th scope="row">Livre Sterling</th>
      <td>{officialDa.result[0].sell}</td>
      <td>{officialDa.result[0].buy}</td>
    </tr>
    <tr>
      <th scope="row">Franc Suisse</th>
      <td>{officialDa.result[2].sell}</td>
      <td>{officialDa.result[2].buy}</td>
    </tr>
    <tr>
      <th scope="row">Dollar Australien</th>
      <td>{officialDa.result[5].sell}</td>
      <td>{officialDa.result[5].buy}</td>
    </tr>
    <tr>
      <th scope="row">Yuan Chinois</th>
      <td>{officialDa.result[6].sell}</td>
      <td>{officialDa.result[6].buy}</td>
    </tr>
    <tr>
      <th scope="row">Yuan Japonais</th>
      <td>{officialDa.result[9].sell}</td>
      <td>{officialDa.result[9].buy}</td>
    </tr>
    <tr>
      <th scope="row">Ruble Russe</th>
      <td>{officialDa.result[7].sell}</td>
      <td>{officialDa.result[7].buy}</td>
    </tr>
    <tr>
      <th scope="row">Ruble Indian</th>
      <td>{officialDa.result[8].sell}</td>
      <td>{officialDa.result[8].buy}</td>
    </tr>
  </tbody>
</table>
    </div>
    <div className="col-lg animated animatedFadeInUp fadeInUp">
      <table className="table table-ligth table-borderless">
        <caption>Us Dollar Market Rates</caption>
  <thead className="table-info">
    <tr>
      <th scope="col">#</th>
      <th scope="col">1 Usd</th>
      <th scope="col">1# in Usd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Euro</th>
      <td>{officialUsd.result[0].sell}</td>
      <td>{officialUsd.result[0].buy}</td>
    </tr>
    <tr>
      <th scope="row">Dollar Canadien</th>
      <td>{officialUsd.result[4].sell}</td>
      <td>{officialUsd.result[4].buy}</td>
    </tr>
    <tr>
      <th scope="row">Livre Sterling</th>
      <td>{officialUsd.result[1].sell}</td>
      <td>{officialUsd.result[1].buy}</td>
    </tr>
    <tr>
      <th scope="row">Franc Suisse</th>
      <td>{officialUsd.result[6].sell}</td>
      <td>{officialUsd.result[6].buy}</td>
    </tr>
    <tr>
      <th scope="row">Dollar Australien</th>
      <td>{officialUsd.result[3].sell}</td>
      <td>{officialUsd.result[3].buy}</td>
    </tr>
    <tr>
      <th scope="row">Yuan Chinois</th>
      <td>{officialUsd.result[9].sell}</td>
      <td>{officialUsd.result[9].buy}</td>
    </tr>
    <tr>
      <th scope="row">Yuan Japonais</th>
      <td>{officialUsd.result[8].sell}</td>
      <td>{officialUsd.result[8].buy}</td>
    </tr>
    <tr>
      <th scope="row">Ringgit Malaysien</th>
      <td>{officialUsd.result[7].sell}</td>
      <td>{officialUsd.result[7].buy}</td>
    </tr>
    <tr>
      <th scope="row">Dollar Singapore</th>
      <td>{officialUsd.result[5].sell}</td>
      <td>{officialUsd.result[5].buy}</td>
    </tr>
    <tr>
      <th scope="row">Ruble Indian</th>
      <td>{officialUsd.result[2].sell}</td>
      <td>{officialUsd.result[2].buy}</td>
    </tr>
  </tbody>
</table></div>
  </div>
</div>

        </main>
        <div>
        <h5 style={{textAlign: 'center',lineHeight: '0'}}>Personalize Theme</h5>

<div id="theme-options-wrapper">
  <div id="light-mode" className="theme-dot"  onClick={() =>  setTheme('light')}></div>
  <div id="green-mode" className="theme-dot" onClick={() => setTheme('dark')}></div>
  <div id="blue-mode" className="theme-dot" onClick={() => setTheme('grey')}></div>
  <div id="purple-mode" className="theme-dot" onClick={() => setTheme('sketch')}></div>
</div>

<p id="settings-note">*Theme settings will be saved<br/>for your next visits</p>
        </div>
        </div>
        )
    
}

export default Home;

