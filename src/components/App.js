/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { GlobalStyle, Page } from '../stylesheets/styles';
import SalesHistory from './SalesHistory.jsx';

/*========== EXPORTS ==========*/
export default function App() {

  /*----- STATE HOOKS -----*/
  const [salesHistory, setSalesHistory] = useState();

  /*----- EVENT HANDLERS -----*/
  const handleImport = () => {
    axios.get('/data')
    .then(salesData => setSalesHistory(salesData.data))
    .catch(err => console.error(err))
  }


  /*----- RENDER METHODS -----*/
  const renderTitle = () => <h1>Customer Rewards Program</h1>
  const renderImport = () => <button onClick={handleImport}>Import Records</button>

  const renderTotalPoints = () => {
    let totalPoints = 0
    salesHistory.forEach(month => {
      totalPoints = totalPoints + month.points
    })

    return <h3>Total Points: {totalPoints}</h3>
  }

  const renderCustomerInfo = () => {
    if (salesHistory && salesHistory.length > 0) {
      return (
        <>
          <h2>Customer Information</h2>
          <SalesHistory salesData={salesHistory} />
          <br/>
          {renderTotalPoints()}
        </>
      )
    } else {
      return (
        <>
          <h2>Customer Information</h2>
          <br/>
          <p>FETCHING ...</p>
        </>
      )
    }
  }


  /*----- RENDERER -----*/
  return (
    <>
      <GlobalStyle />
        <Page>
          {renderTitle()}
          {renderImport()}
          {renderCustomerInfo()}
        </Page>
    </>
  );
}