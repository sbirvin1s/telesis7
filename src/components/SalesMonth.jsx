/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import { Column, Row } from '../stylesheets/styles';


/*========== EXPORTS ==========*/
export default function SalesMonth({ month, sales, points }) {

  /*----- RENDER METHODS -----*/
  const renderMonthHistory = () => {
    return sales.map((sale, index) => {
      return (
        <p key={'salesData' + index}
          style={{
            margin: '0.25rem'
          }}
          >
          {'$' + sale + '\n'}
        </p>
      )
    });
  }

  /*----- RENDERER -----*/
  return (
    <Column
    style={{
      minWidth: '200px',
      width: '25%',
      height: '80%',
    }}
    >
      <h4>{month}</h4>
      <Column
        style={{
          width: '65%',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
        >
        {renderMonthHistory()}
      </Column>
      <Row>
        <h4 key={month}>{month} Points: {points}</h4>
      </Row>
    </Column>
  );
}