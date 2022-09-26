/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import { Row } from '../stylesheets/styles';

/*========== EXPORTS ==========*/
export default function Points({ salesData }) {

  /*----- RENDER METHODS -----*/
  const renderPoints = () => {
    let points = 0;
    salesData.forEach(sale => {
      if (sale >= 50 && sale <= 100) {
        points = points + sale - 50;
      } else if (sale >= 100) {
        points = points + 50 + (2 * (sale - 100));
      }
    })

    return (
      <Row>
        <h3>Your Points: {points}</h3>
      </Row>
    )
  }


  /*----- RENDERER -----*/
  return (
    <>
      {renderPoints()}
    </>
  );
}