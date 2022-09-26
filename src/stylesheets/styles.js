/*========== EXTERNAL MODULES ==========*/
import styled, {createGlobalStyle} from 'styled-components';

/*========== INTERNAL MODULES ==========*/



/*========== EXPORTS ==========*/

/*
=====================================
                THEMES
=====================================
*/

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: #171816;
    /* background-color: #414141; */
  }
`;

/*
=====================================
                TEXT
=====================================
*/

/*
=====================================
                BUTTONS
=====================================
*/

/*
=====================================
                DIVS
=====================================
*/
export const Page = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

/*
=====================================
                FORMS
=====================================
*/

/*
=====================================
                INPUTS
=====================================
*/

/*
=====================================
                IMAGES
=====================================
*/
