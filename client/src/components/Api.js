import React from "react";


function Api() {

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
      <h1 className="text-center mt-5">Methodology</h1>
      <h4 className="text-center mt-5">Jetz is a web application that was created as a side project for my portfolio as a junior web developer and even though most of the data is accurate i wouldn't recommend to take financial advice from this data (its just for demo purposes only) </h4>
      <h1 className="text-center mt-5">More about the project :</h1>
      <h4 className="text-center">This project was made on the mern stack (MongoDB Express React Node) <br/> i used cheerio as a web scraper to get the cryptocurrency prices and the official exchange rates for both USD and DZD so its automatically updated from the source websites every 5 seconds , the second part was adding the black market rates and since there is no API or website to scrape data from i added a DataBase and created my own api that has values who could be updated by an Admin with a control panel after login in (used passport for auth) , the third step was securing api calls from to the backend so no one can use it on another project with a querrey api key fetching.</h4>
      <h4 className="text-center">The front end is made with bootstrap so its easier to make responsive for all screen types and the themes are just bootswatch themes so i didn't have to waste big time making all of this , the project took 1-2 week since i didn't have experince in the backend but solved all of that with some stackoverflow and github repo's.</h4>
      <h1 className="text-center mt-5">Contact Me</h1>
      <h4 className="text-center mt-2">if you want a similaire project or any consultation about web development you can find me</h4>
      <h4 className="text-center mt-1"><i className="far fa-envelope"></i><span className="mr-2"></span>ds.misty13@gmail.com</h4>
      <h4 className="text-center mt-1"><a href="https://github.com/Mistydz/" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i> Mistydz</a></h4>
      <h4 className="text-center mt-1"><a href="https://twitter.com/MohamedMisty" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i> MohamedMisty</a></h4>
    </main>
    </div>
  );
}

export default Api;