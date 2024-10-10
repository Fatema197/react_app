/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import { Route, Router,Link } from 'wouter';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import Users from './Pages/Users';
import Products from './Pages/Products';
import React, { useState } from 'react';
const App = () => {
  const [route, setRoute] = useState(window.location.pathname);

  const navigate = (path) => {
      setRoute(path);
      window.history.pushState({}, '', path); // Update the URL
  };
  const renderPage = () => {
      switch (route) {
          case '/Products':
              return <Products />;
          case '/Users':
              return <Users />;
          default:
              return <Users />;
      }
  };
    return (
        <AppProvider>
           <div>
            <nav>
            <ul className='nav-ul'>
              <li className='nav-li'><a href="#home">Home</a></li>
              <li className='nav-li'><a href="/Products">Products</a></li>
              <li className='nav-li'><a href="/Users">Users</a></li>
            </ul>

            </nav>
            
        {renderPage()}
        </div>
            
        </AppProvider>
    );
};
/**
 * 
                <button onClick={() => navigate('/')}>Users</button>
                <button onClick={() => navigate('/Users')}>Users</button>
                <button onClick={() => navigate('/Products')}>Products</button>
 */
export default App;
