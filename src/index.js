import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Example1 from './useState/Example1'
import Example2 from './useState/Example2'
import  FavoriteColor from './useState/Example3'
import MyComponent from './useContext/Example1/ColorProvider'
import UserDetailsComponent from './useContext/Example2'
import App1 from './useContext/Example3'
import App2 from './useContext/Example4'
import Main from './props/Main'
import FavColor from './props/Example3'
import  BasicExample from './router/Example1/Example1'
import NestingExample from './router/Example2'
import PreventingTransitionsExample from './router/Example3'
import SidebarExample from './router/Example4'

import MainFunction from './amazon/Main'

ReactDOM.render(
  <React.StrictMode>
    <MainFunction/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
