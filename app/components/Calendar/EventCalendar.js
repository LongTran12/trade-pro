import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import styles from "./calendar-jss";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

function Event(event) {
  return <span className="eventBlock">{event.title}</span>;
}

class EventCalendar extends React.Component {
  eventStyleGetter = event => {
    const backgroundColor = "#" + event.hexColor;
    const style = {
      backgroundColor
    };
    return {
      style
    };
  };

  render() {
    const allViews = Object.keys(BigCalendar.Views).map(
      k => BigCalendar.Views[k]
    );
    const { classes, events, handleEventClick } = this.props;
    const currentTime = new Date();
    return (
      <Paper className={classes.root}>
        <BigCalendar
          className={classes.calendarWrap}
          selectable
          events={events}
          defaultView="month"
          views={allViews}
          step={60}
          showMultiDayTimes
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={
            new Date(
              currentTime.getFullYear(),
              currentTime.getMonth(),
              currentTime.getDay()
            )
          }
          onSelectEvent={selectedEvent => handleEventClick(selectedEvent)}
          eventPropGetter={this.eventStyleGetter}
          onSelectSlot={slotInfo =>
            // eslint-disable-next-line
            console.log(
              // eslint-disable-next-line
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                // eslint-disable-next-line
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }
          components={{
            event: Event
          }}
        />
      </Paper>
    );
  }
}

EventCalendar.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  handleEventClick: PropTypes.func.isRequired
};

export default withStyles(styles)(EventCalendar);
