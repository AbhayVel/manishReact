import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './components/Home';
import store from './redux-store/store';
import { Provider } from 'react-redux';


const DashBoard = React.lazy(() => import('./components/Data'));
 

function App() {
    debugger;
    return (
        <Provider store={store}>
      <div className="App">
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/dashboard/:id" element={<Suspense fallback={<div>Loading...</div>}>  <DashBoard /> </Suspense>} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/home/:id" element={<Home />} />
              </Routes>
              </BrowserRouter>
            </div>
       </Provider>
  );
}

export default App;
