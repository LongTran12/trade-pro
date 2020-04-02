import React from 'react';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Type from 'dan-styles/Typography.scss';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import styles from './cardStyle-jss';

const ProductCard = ({
    classes,
    discount,
    soldout,
    thumbnail,
    name,
    desc,
    ratting,
    price,
    prevPrice,
    list,
    detailOpen,
    addToCart,
    width,
    price2,
    id,
    detailLink
}) => {
    const { t, i18n } = useTranslation();
    const textTranslate = (text) => (i18n.exists(text)
        ? t(text) : text);
    // console.log('id', id);
    // console.log('price2', price2);
    return (
        <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
            <div className={classes.status}>
                {discount !== '' && (
                    <Chip label={`${textTranslate('discount')} + ${discount}`} className={classes.chipDiscount} />
                )}
                {soldout && (
                    <Chip label={textTranslate('soldOut')} className={classes.chipSold} />
                )}
            </div>
            <CardMedia
                className={classes.mediaProduct}
                image={thumbnail}
                title={name}
            />
            <CardContent className={classes.floatingButtonWrap}>
                {!soldout && (
                    <Tooltip title="Add to cart" placement="top">
                        <Fab onClick={addToCart} size="small" color="secondary" aria-label="add" className={classes.buttonAdd}>
                            <AddShoppingCart />
                        </Fab>
                    </Tooltip>
                )}
                <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
                    <Link to={`/pages/product-details/${id}`}>{name}</Link>
                </Typography>
                <Typography component="p" className={classes.desc}>
                    {desc}
                </Typography>
                <div className={classes.ratting}>
                    <Rating value={ratting} max={5} readOnly />
                </div>
            </CardContent>
            <CardActions className={classes.price}>
                {price2 > 0 ? (
                    <Typography variant="h5">
                        <span>
                            $
              {Number((price).toFixed(1)).toLocaleString()}
                            {' '}
-
              {Number((price2).toFixed(1)).toLocaleString()}
                            {' '}
Usdi
            </span>
                    </Typography>
                )
                    : (
                        <Typography variant="h5">
                            <span>
                                $
                {Number((price).toFixed(1)).toLocaleString()}
                                {' '}
Usdi
              </span>
                        </Typography>
                    )}
                {prevPrice > 0 && (
                    <Typography variant="caption" component="h5">
                        <span className={Type.lineThrought}>
                            $
              {Number((prevPrice).toFixed(1)).toLocaleString()}
                            {' '}
Usdi
            </span>
                    </Typography>
                )}
                <div className={classes.rightAction}>
                    <Button size="small" variant="outlined" color="secondary" href={`product-details/${id}`} onClick={detailOpen}>
                        {textTranslate('seeDetail')}
                    </Button>
                    {!soldout && (
                        <Tooltip title={textTranslate('addToCart')} placement="top">
                            <IconButton color="secondary" onClick={addToCart} className={classes.buttonAddList}>
                                <AddShoppingCart />
                            </IconButton>
                        </Tooltip>
                    )}
                </div>
            </CardActions>
        </Card>
    );
};


ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    discount: PropTypes.string,
    width: PropTypes.string.isRequired,
    soldout: PropTypes.bool,
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    ratting: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    prevPrice: PropTypes.number,
    list: PropTypes.bool,
    detailOpen: PropTypes.func,
    addToCart: PropTypes.func,
    price2: PropTypes.number,
    id: PropTypes.string
};

ProductCard.defaultProps = {
    discount: '',
    soldout: false,
    price2: 0,
    prevPrice: 0,
    list: false,
    detailOpen: () => (false),
    addToCart: () => (false),

};

const ProductCardResponsive = withWidth()(ProductCard);
export default withStyles(styles)(ProductCardResponsive);
