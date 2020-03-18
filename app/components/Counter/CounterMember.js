/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
    height: 160,
    marginBottom: 6,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      height: 110,
      marginBottom: -1,
      alignItems: "flex-end"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    },
    "& > *": {
      padding: "0 5px"
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
      fontSize: 16
    },
    fontWeight: 400
  },
  counter: {
    color: theme.palette.common.white,
    fontSize: 28,
    fontWeight: 500
  },
  customContent: {
    textAlign: "right"
  }
});

const CounterWidget = ({
  classes,
  color,
  start,
  end,
  duration,
  title,
  children,
  unitBefore,
  unitAfter,
  decimals,
  raw,
  decimal
}) => {
  const { t, i18n } = useTranslation();
  const textTranslate = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  return (
    <Paper className={classes.root} style={{ backgroundColor: color }}>
      <div>
        <Typography className={classes.title} variant="subtitle1">
          {textTranslate(title)}
        </Typography>
        <Typography className={classes.counter}>
          {unitBefore}
          {raw ? (
            textTranslate(raw)
          ) : (
            <CountUp
              start={start}
              end={end}
              duration={duration}
              useEasing
              decimals={decimals}
              decimal={decimal}
            />
          )}

          {unitAfter}
        </Typography>
      </div>
      <div className={classes.customContent}>{children}</div>
    </Paper>
  );
};

CounterWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  unitBefore: PropTypes.string,
  unitAfter: PropTypes.string
};

CounterWidget.defaultProps = {
  unitBefore: "",
  unitAfter: ""
};

export default withStyles(styles)(CounterWidget);
