import React, { Fragment } from 'react';
import injectSheet from 'react-jss';

const styles = {
  container: {
    zIndex: 10000,
    justifyItems:'center',
    display:'grid',
    alignItems:'center',
    gridTemplateColumns:'1fr',
    gridTemplateRows: '100vh',
  },
  box: {
    margin: 0,
    padding:0,
    width: '100px',
    overflow:'hidden',
    display: 'inline-block'
  },
  '@keyframes move':{
    '0%':{ marginLeft: '-100%',},
    '50%':{
      marginLeft: '100%',
      background: 'gray',
      borderColor:'gray'
    },
    '100%': {
      background: 'white',
      borderColor:'white'
    }
  },
  bar: {
    width: '100%',
    height: '5px',
    margin:'2px',
    border: '1px solid white',
    marginLeft: '-102%',
    background:'white',
    animationName:'move',
    animationIterationCount: 'infinite',
    animationDuration: props => `${props.sec}s`
  },
  '@keyframes text': {
    '0%': {color: '#dcdbdb'},
    '50%': {color: 'gray'},
    '100%': {color: '#dcdbdb'},
  },
  text: {
    color: '#dcdbdb',
    textAlign:'center',
    animation: props => `text ${props.sec / 2}s infinite`
  }
}

const Loading = ({sec, rows, classes}) => {

    return (
    <div className={`${classes.container}`}>
      <div className={`${classes.box}`}>
        {[...new Array(rows)].map((e,i) => (
            <div
              key={i}
              style={{
                animationDelay: `${sec/((rows-i+1))}s`,
              }}
              className={`${classes.bar}`}>
            </div>
        ))}
        <p className={`${classes.text}`}>Cargando</p>
      </div>

    </div>
  )
}

Loading.defaultProps = {
  rows: 4,
  rowGap: 4,
  sec:2
}

export default injectSheet(styles)(Loading);
