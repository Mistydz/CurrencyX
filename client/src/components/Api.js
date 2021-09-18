import React from "react";
import './Home.css';


function Api() {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div className="container">
      <a className="navbar-brand ml-5" href="/"><i className="fab fa-cloudscale" aria-hidden="true"></i>  JetZ</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav ml-auto mr-5 mb-2 mb-lg-0">
          <li className="nav-item ml-5">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item ml-5">
            <a className="nav-link" href="/crypto">Crypto</a>
          </li>
          <li className="nav-item mr-5 ml-5">
            <a className="nav-link" href="/admin">Control Panel</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    <main className="container">
    <a href="https://github.com/Mistydz/Jetz" className="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: '130px 106px'}} className="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path></svg></a>
      <h2 className="text-center mt-5">Methodology</h2>
      <h6 className="text-center mt-1">Jetz is a web application that was created as a side project for my portfolio as a junior web developer and even though most of the data is accurate i wouldn't recommend to take financial advice from this data (its just for demo purposes only) </h6>
      <h2 className="text-center mt-5">More about the project :</h2>
      <h6 className="text-center mt-1">This project was made on the mern stack (MongoDB Express React Node) <br/> i used cheerio as a web scraper to get the cryptocurrency prices and the official exchange rates for both USD and DZD so its automatically updated from the source websites every 5 seconds , the second part was adding the black market rates and since there is no API or website to scrape data from i added a DataBase and created my own api that has values who could be updated by an Admin with a control panel after login in (used passport for auth) , the third step was securing api calls from to the backend so no one can use it on another project with a querrey api key fetching.</h6>
      <h6 className="text-center">The front end is made with bootstrap so its easier to make responsive for all screen types and the themes are just bootswatch themes so i didn't have to waste big time making all of this , the project took 1-2 week since i didn't have experince in the backend but solved all of that with some stackoverflow and github repo's.</h6>
      <h2 className="text-center mt-5">Contact Me</h2>
      <h6 className="text-center mt-2">if you want a similaire project or any consultation about web development you can find me</h6>
      <h6 className="text-center mt-1"><i className="far fa-envelope" aria-hidden="true"></i><span className="mr-2"></span>ds.misty13@gmail.com</h6>
      <h6 className="text-center mt-1"><a href="https://github.com/Mistydz/" target="_blank" rel="noreferrer"><i className="fab fa-github-square" aria-hidden="true"></i> Mistydz</a></h6>
      <h6 className="text-center mt-1"><a href="https://twitter.com/MohamedMisty" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square" aria-hidden="true"></i> MohamedMisty</a></h6>
    </main>
    </div>
  );
}

export default Api;
