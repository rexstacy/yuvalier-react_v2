import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TiendasLivedata from './Components/TiendasLivedata';
import { tiendasDTO } from './Models/tiendas';
import TiendasLivedataList from './Components/TiendasLivedataList';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

 const tiendaslist : tiendasDTO[] = [
  {
    codclasi: '025',
    nombre: 'sirena luperon',
    nombre_corto: 'sirena luperon',
    ventas: 2500.00,
    horas: '00H 25M'
  },
  {
    codclasi: '026',
    nombre: 'sirena bani',
    nombre_corto: 'sirena bani',
    ventas: 8500.00,
    horas: '20H 25M'
  }
 ]

root.render(
  <React.StrictMode>
    <TiendasLivedataList tiendas={tiendaslist}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
