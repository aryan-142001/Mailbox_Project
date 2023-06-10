import logo from './logo.svg';
import './App.css';
// import items from './data'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Mail from './components/Menu';
import { legacy_createStore as createStore } from "redux"
import { Provider } from 'react-redux';
import MailContent from './components/MailContent';
import Categories from './components/Categories';
import {reducer,initialState} from './Reducers/reducer';
 



const store=createStore(reducer,initialState)

function App() {
 
  return (
    <Provider store={store}>
      <section className='menu section'>
        <div className='title'>
          <h2>Mail Box</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <MailContent/>
        <Mail/>
      </section>
    </Provider>
  );
}

export default App;
