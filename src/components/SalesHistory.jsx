/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import { Row } from '../stylesheets/styles';
import SalesMonth from './SalesMonth.jsx';


/*========== EXPORTS ==========*/
export default function SalesHistory({ salesData }) {

  /*----- RENDER METHODS -----*/
  const renderHistory = () => {
    return salesData.map(month => <SalesMonth key={month.name} month={month.name} sales={month.sales} points={month.points}/>)
  }

  /*----- RENDERER -----*/
  return (
    <Row
      style={{
        width: '80vw',
        height: '80vh',
      }}
      >
      {renderHistory()}
    </Row>
  );
}