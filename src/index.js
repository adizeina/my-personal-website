import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <MyNavbar/>
    </div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
