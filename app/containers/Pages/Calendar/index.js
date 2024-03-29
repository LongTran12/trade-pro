import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import "dan-styles/vendors/react-big-calendar/react-big-calendar.css";
import {
  EventCalendar,
  DetailEvent,
  AddEvent,
  Notification,
} from "dan-components";
import {
  fetchAction,
  addAction,
  discardAction,
  submitAction,
  deleteAction,
  closeNotifAction,
} from "dan-actions/CalendarEventActions";
import { bonusPublic } from "../../../provider/web3Public";

const styles = {
  root: {
    display: "block",
  },
};

class Calendar extends React.Component {
  state = {
    anchorEl: false,
    event: null,
    anchorPos: { top: 0, left: 0 },
  };

  componentDidMount() {
    const { fetchEventsData } = this.props;
    bonusPublic.getPastEvents(
      "BonusUSDI",
      {
        fromBlock: 0,
        toBlock: "latest",
      },
      function(error, events) {
        let formatEvents = events.map((item, index) => ({
          id: index + 21,
          title: `Bonus USDI`,
          start: new Date(item.returnValues.time * 1000),
          end: new Date(item.returnValues.time * 1000),
          desc: `Today Percent: M6 - ${item.returnValues.percent[0] /
            100}%; M12 - ${item.returnValues.percent[1] / 100}%;M18 - ${item
            .returnValues.percent[2] / 100}%;`,
          hexColor: "2196F3",
        }));
        let init = [
          {
            id: 0,
            title: "Bonus USDI",
            start: new Date(2020, 3, 1),
            end: new Date(2020, 3, 1),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 1,
            title: "Bonus USDI",
            start: new Date(2020, 3, 2),
            end: new Date(2020, 3, 2),
            desc: `Today Percent: M6 - ${0.35}%; M12 - ${0.45}%;M18 - ${0.7}%;`,
            hexColor: "2196F3",
          },
          {
            id: 2,
            title: "Bonus USDI",
            start: new Date(2020, 3, 3),
            end: new Date(2020, 3, 3),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 3,
            title: "Bonus USDI",
            start: new Date(2020, 3, 4),
            end: new Date(2020, 3, 4),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 4,
            title: "Bonus USDI",
            start: new Date(2020, 3, 5),
            end: new Date(2020, 3, 5),
            desc: `Today Percent: M6 - ${0}%; M12 - ${0}%;M18 - ${0}%;`,
            hexColor: "2196F3",
          },
          {
            id: 5,
            title: "Bonus USDI",
            start: new Date(2020, 3, 6),
            end: new Date(2020, 3, 6),
            desc: `Today Percent: M6 - ${0.35}%; M12 - ${0.45}%;M18 - ${0.7}%;`,
            hexColor: "2196F3",
          },
          {
            id: 6,
            title: "Bonus USDI",
            start: new Date(2020, 3, 7),
            end: new Date(2020, 3, 7),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 7,
            title: "Bonus USDI",
            start: new Date(2020, 3, 8),
            end: new Date(2020, 3, 8),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 8,
            title: "Bonus USDI",
            start: new Date(2020, 3, 9),
            end: new Date(2020, 3, 9),
            desc: `Today Percent: M6 - ${0}%; M12 - ${0}%;M18 - ${0}%;`,
            hexColor: "2196F3",
          },
          {
            id: 9,
            title: "Bonus USDI",
            start: new Date(2020, 3, 10),
            end: new Date(2020, 3, 10),
            desc: `Today Percent: M6 - ${0.35}%; M12 - ${0.45}%;M18 - ${0.7}%;`,
            hexColor: "2196F3",
          },
          {
            id: 10,
            title: "Bonus USDI",
            start: new Date(2020, 3, 11),
            end: new Date(2020, 3, 11),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 11,
            title: "Bonus USDI",
            start: new Date(2020, 3, 12),
            end: new Date(2020, 3, 12),
            desc: `Today Percent: M6 - ${0}%; M12 - ${0}%;M18 - ${0}%;`,
            hexColor: "2196F3",
          },
          {
            id: 12,
            title: "Bonus USDI",
            start: new Date(2020, 3, 13),
            end: new Date(2020, 3, 13),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 13,
            title: "Bonus USDI",
            start: new Date(2020, 3, 14),
            end: new Date(2020, 3, 14),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 14,
            title: "Bonus USDI",
            start: new Date(2020, 3, 15),
            end: new Date(2020, 3, 15),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 15,
            title: "Bonus USDI",
            start: new Date(2020, 3, 16),
            end: new Date(2020, 3, 16),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 16,
            title: "Bonus USDI",
            start: new Date(2020, 3, 17),
            end: new Date(1704 / 2020),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 17,
            title: "Bonus USDI",
            start: new Date(2020, 3, 18),
            end: new Date(2020, 3, 18),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
          {
            id: 18,
            title: "Bonus USDI",
            start: new Date(2020, 3, 19),
            end: new Date(2020, 3, 19),
            desc: `Today Percent: M6 - ${0}%; M12 - ${0}%;M18 - ${0}%;`,
            hexColor: "2196F3",
          },
          {
            id: 19,
            title: "Bonus USDI",
            start: new Date(2020, 3, 20),
            end: new Date(2020, 3, 20),
            desc: `Today Percent: M6 - ${0.25}%; M12 - ${0.35}%;M18 - ${0.5}%;`,
            hexColor: "2196F3",
          },
          {
            id: 20,
            title: "Bonus USDI",
            start: new Date(2020, 3, 21),
            end: new Date(2020, 3, 21),
            desc: `Today Percent: M6 - ${0.5}%; M12 - ${0.75}%;M18 - ${1}%;`,
            hexColor: "2196F3",
          },
        ];

        fetchEventsData([...init, ...formatEvents]);
      }
    );
  }

  handleClick = (event) => {
    setTimeout(() => {
      const target = document.getElementsByClassName("rbc-selected")[0];
      const targetBounding = target.getBoundingClientRect();
      this.setState({
        event,
        anchorEl: true,
        anchorPos: { top: targetBounding.top, left: targetBounding.left },
      });
    }, 200);
  };

  handleClose = () => {
    this.setState({
      anchorEl: false,
    });
  };

  render() {
    const title = brand.name + " - Calendar";
    const description = brand.desc;
    const { anchorEl, anchorPos, event } = this.state;
    const {
      classes,
      eventData,
      openFrm,
      addEvent,
      discardEvent,
      submit,
      remove,
      closeNotif,
      messageNotif,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Notification close={() => closeNotif()} message={messageNotif} />
        <div className={classes.root}>
          <EventCalendar
            events={eventData.toJS()}
            handleEventClick={this.handleClick}
          />
          <DetailEvent
            event={event}
            anchorEl={anchorEl}
            anchorPos={anchorPos}
            close={this.handleClose}
            remove={remove}
          />
          <AddEvent
            openForm={openFrm}
            addEvent={addEvent}
            closeForm={discardEvent}
            submit={submit}
          />
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
  eventData: PropTypes.object.isRequired,
  fetchEventsData: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  discardEvent: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  openFrm: PropTypes.bool.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const reducer = "calendar";
const mapStateToProps = (state) => ({
  force: state, // force state from reducer
  eventData: state.getIn([reducer, "events"]),
  openFrm: state.getIn([reducer, "openFrm"]),
  messageNotif: state.getIn([reducer, "notifMsg"]),
});

const constDispatchToProps = (dispatch) => ({
  fetchEventsData: bindActionCreators(fetchAction, dispatch),
  submit: bindActionCreators(submitAction, dispatch),
  remove: bindActionCreators(deleteAction, dispatch),
  addEvent: () => dispatch(addAction),
  discardEvent: () => dispatch(discardAction),
  closeNotif: () => dispatch(closeNotifAction),
});

const CalendarMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(Calendar);

export default withStyles(styles)(CalendarMapped);
