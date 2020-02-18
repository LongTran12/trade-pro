import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import commentData from 'dan-api/apps/commentData';
import styles from 'dan-components/Product/product-jss';
import { useTranslation } from 'react-i18next';

import Comments from '../Comments';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const ProductDetail = ({ classes, theme, description, arrSpeci }) => {

  const { t, i18n } = useTranslation();
  const textTranslate = (text) => {
    return i18n.exists(text) ? t(text) : text;
  }
  const [value, setValue] = useState(0)
  const handleChange = (event, values) => {
    setValue(values);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  const colorReturn = (a) => {
    switch (a) {
      case 0:
        return classes.purpleAvatar;
      case 1:
        return classes.greenAvatar;
      case 2:
        return classes.pinkAvatar;
      case 3:
        return classes.orangeAvatar;
      default:
        return classes.orangeAvatar;
    }
  }
  const colorReturn1 = (a) => {
    switch (a) {
      case 'a0':
        return classes.blueAvatar;
      case 'a1':
        return classes.cyanAvatar;
      case 'a2':
        return classes.redAvatar;
      case 'a3':
        return classes.tealAvatar;
      default:
        return classes.orangeAvatar;
    }
  }
  const colorReturn2 = (a) => {
    switch (a) {
      case 'as0':
        return classes.brownAvatar;
      case 'as1':
        return classes.purpleDeepAvatar;
      case 'as2':
        return classes.amberAvatar;
      case 'as3':
        return classes.limeAvatar;
      default:
        return classes.orangeAvatar;
    }
  }
  return (
    <div>
      <Paper className={classes.rootDesc} elevation={0}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label={textTranslate('commments')} />
            <Tab label={textTranslate('description')} />
            <Tab label={textTranslate('specification')} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Comments dataList={commentData} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <article>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>

                  {description}


                </Grid>
              </Grid>
            </article>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <List>
                  {
                    arrSpeci.speci1.length > 0 && arrSpeci.speci1.map((index, i) =>
                      <ListItem key={i}>
                        <Avatar className={classNames(classes.avatar, colorReturn(i))}>
                          <Icon>{index.icon}</Icon>
                        </Avatar>
                        <ListItemText primary={index.id} secondary={index.desc} />
                      </ListItem>
                    )}
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <List>
                  {
                    arrSpeci.speci2.length > 0 && arrSpeci.speci2.map((index, i) =>
                      <ListItem key={`a${i}`}>
                        <Avatar className={classNames(classes.avatar, colorReturn1(`a${i}`))}>
                          <Icon>{index.icon}</Icon>
                        </Avatar>
                        <ListItemText primary={index.id} secondary={index.desc} />
                      </ListItem>
                    )}
                </List>
              </Grid>
              <Grid item md={4} xs={12}>
                <List>
                  {
                    arrSpeci.speci3.length > 0 && arrSpeci.speci3.map((index, i) =>
                      <ListItem key={`as${i}`}>
                        <Avatar className={classNames(classes.avatar, colorReturn2(`as${i}`))}>
                          {index.icon && <Icon>{index.icon}</Icon>}
                        </Avatar>
                        {index.id && <ListItemText primary={index.id} secondary={index.desc} />}
                      </ListItem>
                    )}
                </List>
              </Grid>
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </Paper>
    </div>
  );
}


ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  description: PropTypes.element.isRequired,
  arrSpeci: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(ProductDetail);
