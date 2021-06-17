import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Slider, Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 1300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={`$${value}`}
    >
      {children}
    </Tooltip>
  );
}

export default function RangeSlider({ min, max, step, value, handleChange }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box mt={3}></Box>
      <Slider
        min={min}
        max={max}
        marks={true}
        step={step}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        ValueLabelComponent={ValueLabelComponent}
        aria-labelledby="input-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
