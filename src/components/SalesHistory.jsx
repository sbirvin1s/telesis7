/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import { Column } from '../stylesheets/styles';


/*========== EXPORTS ==========*/
export default function SalesHistory({ salesData }) {

  /*----- RENDER METHODS -----*/
  const renderHistory = () => {
    const history = salesData.map((sale, index) => {
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

    return (
      <Column
        style={{
          width: '40vw',
          height: '50vh',
          flexWrap: 'wrap',
        }}
        >
        {history}
      </Column>
    )
  }


  /*----- RENDERER -----*/
  return (
    <>
      {renderHistory()}
    </>
  );
}