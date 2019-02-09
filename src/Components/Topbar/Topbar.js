import React, { Component } from 'react';
import './Topbar.css';

export default class Topbar extends Component {
  render() {
    return(
      <div>
        <div id='toprow' className='div-row'>
          <image />
          <h1>BlueMarket</h1>
          <input />
          <button>Search</button>
          <h1>Special Deals Here</h1>
        </div>
        <div id="botrow" className='div-row'>
          <p1>Buy Again</p1>
          <p1 className='row-item'>Your pickup location</p1>
          <p1 className='row-item'>Browsing History</p1>
          <p1 className='row-item'>Your Market</p1>
          <p1 className='row-item'>Today's Deal</p1>
          <p1 className='row-item'>Gift Cards</p1>
          <p1 className='row-item'>Whole Foods</p1>
          <p1 className='row-item'>Registry</p1>
          <p1 className='row-item'>Sell</p1>
          <p1 className='row-item'>Help</p1>
        </div>
      </div>
    );
  }
}