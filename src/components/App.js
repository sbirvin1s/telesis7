/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { GlobalStyle, Page, Row } from '../stylesheets/styles';
import SalesHistory from './SalesHistory.jsx';
import Points from './Points.jsx';


/*========== EXPORTS ==========*/
export default function App() {

  /*----- STATE HOOKS -----*/
  const [salesHistory, setSalesHistory] = useState();
  /*----- LIFESTYLE MEHTODS -----*/

  /*----- EVENT HANDLERS -----*/
  const handleImport = () => {
    axios.get('/data')
    .then(salesData => setSalesHistory(salesData.data))
    .catch(err => console.error(err))
  }

  const handleUpdate = () => {
    setSalesHistory([Math.floor(Math.random() * 1000)]);
  }

  /*----- RENDER METHODS -----*/
  const renderTitle = () => {
    return <h1>Customer Rewards Program</h1>
  }

  const renderImport = () => {
    return (
      <button onClick={handleImport}>Import Records</button>
    )
  }

  const renderUpdate = () => <button onClick={handleUpdate}>Update Records</button>

  const renderCustomerInfo = () => {
    if (salesHistory && salesHistory.length > 0) {
      return (
        <>
          <h2>Customer Information</h2>
          <Row
            style={{
              maxWidth: '1200px',
              width: '80vw',
            }}
            >
            <SalesHistory salesData={salesHistory}/>
            <Points salesData={salesHistory}/>
          </Row>
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
          <Row
            style={{
              width: '75%',
              justifyContent: 'space-evenly',
            }}
            >
            {renderImport()}
            {renderUpdate()}
          </Row>
          {renderCustomerInfo()}
        </Page>
    </>
  );
}