import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { makeStyles } from '@material-ui/core/styles';

import MenuOption from '../MenuOption/MenuOption';

import './MenuSelect.css';

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
  },
  item: { 
    color: "blue"
  }
  // menu: {
  //   position: "absolute",
  //   bottom: "0",
  //   left: "0",
  //   padding: "48px"
  // }
}})


export default function MenuSelect() {
  const classes = useStyles();
  console.log(classes);

  function renderOptions() {
    const options = [
      "Play",
      "Garage",
      "Training",
      "Career",
      "Extras",
      "Options",
      "Exit Game"
    ];

    return options.map(option => {
      
      return <MenuOption label={option}/>
    });
  }
  return (
    // <div className="MenuSelect">
    <div className="MenuSelect">
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        {renderOptions()  }
      </ButtonGroup>
    </div>
  );
}
