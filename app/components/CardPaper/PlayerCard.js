import React from 'react';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import styles from './cardStyle-jss';

const TextTranslate = ({ text }) => {
  const { t, i18n } = useTranslation();
  return i18n.exists(text)
    ? t(text) : text;
}
class PlayerCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const {
      classes,
      theme,
      title,
      artist,
      cover,
    } = this.props;

    return (
      <Card className={classes.cardPlayer}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {artist}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="Play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={cover}
          title={title}
        />
      </Card>
    );
  }
}

PlayerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(PlayerCard);
