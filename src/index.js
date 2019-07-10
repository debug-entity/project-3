import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// var music =new Audio ("/m.mp3");
// music.loop = true;
// music.play();

const AppJsx = (
    <HashRouter>
      <App />
    </HashRouter>
  )
ReactDOM.render(AppJsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
