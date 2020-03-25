import React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import imgApi from "dan-api/images/photos";
import avatarApi from "dan-api/images/avatars";
import PapperBlock from "../PapperBlock/PapperBlock";
import NewsCard from "../CardPaper/NewsCard";
import ProfileCard from "../CardPaper/ProfileCard";
import avatarUser from 'dan-images/intro/timeline-first.jpg';
import slide1 from "dan-images/slide/slide1.jpg";
import slide2 from "dan-images/slide/slide2.jpg";
import slide3 from "dan-images/slide/slide3.jpg";
import slide4 from "dan-images/slide/slide4.jpg";
import slide5 from "dan-images/slide/slide5.jpg";
import slide6 from "dan-images/slide/slide6.jpg";
import slide7 from "dan-images/slide/slide7.jpg";
import slide8 from "dan-images/slide/slide8.jpg";
import slide9 from "dan-images/slide/slide9.jpg";
import slide10 from "dan-images/slide/slide10.jpg";
import slide11 from "dan-images/slide/slide11.jpg";
import slide12 from "dan-images/slide/slide12.jpg";
import slide13 from "dan-images/slide/slide13.jpg";
import slide15 from "dan-images/slide/slide15.jpg";
import styles from "./jss/socialMedia-jss";

const slideData = [
  {
    imgPath: slide1
  },
  {
    imgPath: slide2
  },
  {
    imgPath: slide3
  },
  {
    imgPath: slide4
  },
  {
    imgPath: slide5
  },
  {
    imgPath: slide6
  },
  {
    imgPath: slide7
  },
  {
    imgPath: slide8
  },
  {
    imgPath: slide9
  },
  {
    imgPath: slide10
  },
  {
    imgPath: slide11
  },
  {
    imgPath: slide12
  },
  {
    imgPath: slide13
  },
  {
    imgPath: slide15
  }
];
const TextTranslate = ({ text }) => {
  const { t, i18n } = useTranslation();
  return i18n.exists(text) ? t(text) : text;
};

class SideSection extends React.Component {
  state = {
    activeStepSwipe: 0
  };

  handleNextSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe + 1
    }));
  };

  handleBackSwipe = () => {
    this.setState(prevState => ({
      activeStepSwipe: prevState.activeStepSwipe - 1
    }));
  };

  handleStepChangeSwipe = activeStepSwipe => {
    this.setState({ activeStepSwipe });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStepSwipe } = this.state;

    const maxStepsSwipe = slideData.length;
    return (
      <div>
        {/* Profile */}
        <ProfileCard
          cover={avatarUser}
          avatar={avatarApi[6]}
          name="OTE User"
          title="Founder"
          connection={10}
          btnText={<TextTranslate text="myProfile" />}
          isVerified

        />
        <Divider className={classes.divider} />
        {/* ----------------------------------------------------------------------*/}
        {/* News Or Ads Section */}
        <Paper>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStepSwipe}
            onChangeIndex={this.handleStepChangeSwipe}
            enableMouseEvents
            className={classes.sliderWrap}
          >
            {slideData.map((slide, index) => (
              <div className={classes.figure} key={index.toString()}>
                <NewsCard
                  image={slide.imgPath}
                  title="slide.label"
                  className={classes.sliderContent}
                >
                  <Typography
                    gutterBottom
                    className={classes.title}
                    variant="h5"
                    component="h2"
                  >
                    {slide.label}
                  </Typography>
                </NewsCard>
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant="dots"
            steps={maxStepsSwipe}
            position="static"
            activeStep={activeStepSwipe}
            className={classes.mobileStepper}
            nextButton={
              <Button
                size="small"
                onClick={this.handleNextSwipe}
                disabled={activeStepSwipe === maxStepsSwipe - 1}
              >
                <TextTranslate text="next" />
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                  )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={this.handleBackSwipe}
                disabled={activeStepSwipe === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                  )}
                <TextTranslate text="back" />
              </Button>
            }
          />
        </Paper>
        {/* ----------------------------------------------------------------------*/}
        {/* People */}
        <PapperBlock
          title={<TextTranslate text="peopleYouKnow" />}
          icon="ios-people-outline"
          whiteBg
          noMargin
          desc=""
        >
          <List component="nav" dense className={classes.profileList}>
            <ListItem button className={classes.listPeople}>
              <Avatar
                className={classNames(classes.avatar, classes.orangeAvatar)}
              >
                H
              </Avatar>
              <ListItemText
                primary="Harry Wells"
                secondary="2 Mutual Connection"
              />
              <Button color="secondary" size="small">
                Connect
              </Button>
            </ListItem>
            <ListItem button className={classes.listPeople}>
              <Avatar
                className={classNames(classes.avatar, classes.purpleAvatar)}
              >
                J
              </Avatar>
              <ListItemText
                primary="OTE User"
                secondary="8 Mutual Connection"
              />
              <Button color="secondary" size="small">
                Connect
              </Button>
            </ListItem>
            <ListItem button className={classes.listPeople}>
              <Avatar
                className={classNames(classes.avatar, classes.pinkAvatar)}
              >
                V
              </Avatar>
              <ListItemText
                primary="Victor Wanggai"
                secondary="12 Mutual Connection"
              />
              <Button color="secondary" size="small">
                Connect
              </Button>
            </ListItem>
            <ListItem button className={classes.listPeople}>
              <Avatar
                className={classNames(classes.avatar, classes.greenAvatar)}
              >
                H
              </Avatar>
              <ListItemText
                primary="Baron Phoenix"
                secondary="10 Mutual Connection"
              />
              <Button color="secondary" size="small">
                Connect
              </Button>
            </ListItem>
          </List>
          <Divider className={classes.divider} />
          <Grid container justify="center">
            <Button color="secondary" className={classes.button}>
              {<TextTranslate text="seeAll" />}
            </Button>
          </Grid>
        </PapperBlock>
        <Divider className={classes.divider} />
        {/* ----------------------------------------------------------------------*/}
        {/* Trending */}
        <PapperBlock
          title={<TextTranslate text="trendForYou" />}
          icon="ios-flame-outline"
          whiteBg
          desc=""
        >
          <List dense className={classes.trendingList}>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>
                #Lorem ipsum dolor
              </a>
              <ListItemText secondary="2987 Posts" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>
                #Aliquam venenatis
              </a>
              <ListItemText secondary="2345 Posts" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>
                #Nam sollicitudin
              </a>
              <ListItemText secondary="1234 Posts" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>
                #Cras convallis
              </a>
              <ListItemText secondary="6789 Connection" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>
                #Aenean sit amet
              </a>
              <ListItemText secondary="2987 Connection" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>
                #Quisque
              </a>
              <ListItemText secondary="1456 Connection" />
            </ListItem>
            <ListItem className={classes.noPadding}>
              <a href="#" className={classes.link}>
                #Lorem ipusm dolor
              </a>
              <ListItemText secondary="2987 Connection" />
            </ListItem>
          </List>
        </PapperBlock>
      </div>
    );
  }
}

SideSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideSection);
