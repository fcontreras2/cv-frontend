import React from 'react';
import injectSheet, { jss, ThemeProvider } from "react-jss";

const styles =
  {
    container: {
      gridTemplateRows: '100vh',
      transform: 'translateX(100px)'
    },
    boxImage: {
      display: 'grid',
      background: `url('http://www.themecop.com/html/cvitae/img/slider/2-background.jpg')`,
      gridTemplateRows:'repeat(10,10%)',
      gridTemplateColumns: '3% 1fr 1fr',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      '& p': {
        gridColumn: '2/3',
        gridRow: '5/6'
      },
      '& p:nth-child(2)': {
        gridRow: '6/6'
      }
    }
  }



const Welcome = ({theme, classes}) => (
  <div className={`container ${classes.container}`}>
     <div className={`col-1-17 ${classes.boxImage}`}>
       <p className={`fadeIn ${classes.button}`}>LONY STARK</p>
       <p>CREATIVE CORPORATE</p>
     </div>
   </div>
)

export default injectSheet(styles)(Welcome);
