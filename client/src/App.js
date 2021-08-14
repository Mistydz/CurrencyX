import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import Panel from './components/Panel';
import {Error} from './components/Error';
import Api from './components/Api';
import Crypto from './components/Crypto';
import ProtectedRoute from "./components/ProtectedRoute";
import Axios from "axios";
import './App.css';
import './Admin.css';


function App() {
  let theme = localStorage.getItem('theme')


  if(theme == null){
    setTheme('light')
  }else{
    setTheme(theme)
  }

  function setTheme(mode){
    var link = document.getElementsByTagName("link")[2];
    if(mode === 'light'){
      link.setAttribute('href', `https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/simplex/bootstrap.min.css`)

    }
    
    if(mode === 'dark'){
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

  
  const [isAuth, setIsAuth] = useState(false)
  const [serror, setSerror] = useState(false)
  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')


  const checkUser = () => {
    Axios({
      method: "POST",
      data: {
        username: userName,
        password: passWord,
      },
      withCredentials: true,
      url: "/login",
    }).then((res) => {
      if(res.data === 'Successfully Authenticated'){
        setIsAuth(true)
        setSerror(false)
        sessionStorage.setItem('auth', 'on')
      }else{
        setSerror(true)
        setIsAuth(false)
      };
    }
);
  };

  let auth = sessionStorage.getItem('auth')
  if(isAuth){
    console.log('is auth')
  }else if(auth === 'on'){
    setIsAuth(true)
  }else{
    console.log('no auth')
  }



  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/crypto">
        <Crypto/>
      </Route>
      <Route path="/admin" exact>
        <div className="body">
      <main className="form-signin hss">
      <h1 className="h3 mb-3 fw-normal centertext" style={{display:  isAuth ? 'none' : 'block' , paddingBottom: serror ? '0px' : '26px' }}>Please sign in</h1>
      <h4 className="h4 fw-normal centertext" style={{display:  isAuth ? 'block' : 'none' , color: 'green'}}>Logged in successfully</h4>
      <h6 className="centertext" style={{display:  serror ? 'block' : 'none' , color: 'red' }}>Wrong user or password , please try again</h6>
        <div className="form-floating">
      <input 
      className="form-control"
      id="floatingInput"
      style={{display:  isAuth ? 'none' : 'block' }}
        type="text" 
        placeholder="username"
        autoComplete="off"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      </div>
      <div className="form-floating">
      <input 
      className="form-control"
      id="floatingInput"
      style={{display:  isAuth ? 'none' : 'block' }}
        type="text" 
        placeholder="password"
        autoComplete="off"
        onChange={(e) => {
          setPassWord(e.target.value);
        }}
      />
      </div>
      
      <button className="w-100 h-50 mt-4 p-2 btn btn-lg btn-primary" style={{display:  isAuth ? 'none' : 'block' }} onClick={checkUser}>Login</button>
      <p className="mt-3 mb-3 text-muted" style={{display:  isAuth ? 'none' : 'block', cursor:'pointer' }}><span style={{paddingRight:'30px'}}></span>username : Admin<span style={{paddingRight:'30px'}}></span>password : 1234</p>
          <Link to="panel" style={{display:  isAuth ? 'block' : 'none' }}><button className="w-100 h-50 p-3 btn btn-lg btn-info">Admin Panel</button></Link>
        </main>
        </div>
      </Route>
      <Route path="/panel">
      <ProtectedRoute component={Panel} isAuth={isAuth} />
      </Route>
      <Route path='/info'>
          <Api/>
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
