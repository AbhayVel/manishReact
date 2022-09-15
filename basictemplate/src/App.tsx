import React, { Suspense, useTransition } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router, Routes  } from 'react-router-dom';
import Home from './components/Home';
import store from './redux-store/store';
import { Provider } from 'react-redux';


const DashBoard = React.lazy(async () =>await import('./components/Data'));
 

function App() {
    const [isPending, startTransition] = useTransition();
    return (
        <React.StrictMode>
        <Provider store={store}>
                <div className="App">
                   
                   
                       
                    <BrowserRouter>
                        <a href="/home">Home </a>
                        |       <a href="/dashboard">DashBoard </a>
                        | <Link to="/home"  >Home  </Link>
                        | <Link to="/Dashboard" >    DashBoard  </Link>
          <Routes>
              <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                            <Route path="/dashboard/:id" element={!isPending && <Suspense  fallback={<div>Loading...</div>}>  <DashBoard /> </Suspense>} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/home/:id" element={<Home />} />
              </Routes>
              </BrowserRouter>
            </div>
            </Provider>
        </React.StrictMode>
  );
}

export default App;
