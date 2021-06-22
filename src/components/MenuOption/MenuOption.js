import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
  root: {
     background: '#282c34',
    '&:hover': {
      background: 'linear-gradient(45deg, #97e4f0 30%, white 90%)',
      color: '#005c6a'
    },
    opacity: ".9",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 24,
    width: "auto",
    padding: '0 30px',
    justifyContent: 'flex-start',
    margin: theme.spacing(.5)
  }
  
}));



export default function MenuOption(props) {
  const classes = useStyles();

  const {label} = props;
  return <Button
  // style={{transformOrigin: 'skew("-20deg")'}}
    className={classes.root}
    >
      {label}
    </Button>;
}
