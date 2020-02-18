import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import imgData from 'dan-api/images/imgData';
import imgApi from 'dan-api/images/photos';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Type from 'dan-styles/Typography.scss';
import { Rating, ProductCard, ProductDesc } from 'dan-components';
import 'dan-styles/vendors/slick-carousel/slick-carousel.css';
import 'dan-styles/vendors/slick-carousel/slick.css';
import 'dan-styles/vendors/slick-carousel/slick-theme.css';
import styles from 'dan-components/Product/product-jss';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import DataDetail from 'dan-components/Product/DataDetail'



const ProductDetail = ({ classes,
  close,
  handleAddToCart
}) => {
  const { idproduct } = useParams();
  console.log('id product', idproduct)
  console.log('data product', DataDetail)
  const { t, i18n } = useTranslation();
  const textTranslate = (text) => {
    return i18n.exists(text) ? t(text) : text;
  }
  const [qty, setQty] = useState(1)
  const handleQtyChange = event => {
    setQty(event.target.value);
  }

  const dataShow = DataDetail.filter((e) => e.id === idproduct)
  const data = dataShow ? dataShow[0] : {};
  console.log('data', data.thumbnailList);

  const submitToCart = itemAttr => {
    handleAddToCart(itemAttr);
    close();
  };

  const itemAttr = (item) => {
    if (item !== undefined) {
      return {
        id: item.id,
        name: item.name,
        thumbnail: item.thumbnail,
        price: item.thumbnail,
        quantity: qty
      };
    }
    return false;
  };

  const settings = {
    customPaging: (i) => (
      <a>
        <img src={data.thumbnailList[i].img} alt="thumb" />
      </a>
    ),
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Paper className={classes.rootDetail} elevation={0}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item md={6} sm={12} xs={12}>
            <aside className={classes.imgGallery}>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Rating value={data.ratting} max={5} readOnly />
              <div className="container thumb-nav">
                <Slider {...settings}>
                  {data.thumbnailList.map((item, index) => {
                    if (index > 4) {
                      return false;
                    }
                    return (
                      <div key={index.toString()} className={classes.item}>
                        <img src={item.img} alt={item.title} />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </aside>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <section className={classes.detailWrap}>
              <div className={classes.price}>
                <Typography variant="h5">
                  {data.price2 > 0 ?
                    <span>$ {Number((data.price).toFixed(1)).toLocaleString()} - {Number((data.price2).toFixed(1)).toLocaleString()} Usdi</span> :
                    <span>$ {Number((data.price).toFixed(1)).toLocaleString()} Usdi</span>
                  }
                </Typography>
                {/* <Fragment>
                  <Typography variant="caption" component="h5">
                    <span className={Type.lineThrought}>$ 100</span>
                  </Typography>
                  <Chip label="Discount 10%" className={classes.chipDiscount} />
                </Fragment> */}
              </div>
              <Typography component="p" className={classes.desc}>
                {data.shortDesc}
              </Typography>
              <div className={classes.btnArea}>
                <Typography variant="subtitle1">
                  {textTranslate('quantity')}
                </Typography>
                <TextField
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="none"
                  value={qty}
                  className={classes.quantity}
                  onChange={handleQtyChange}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => submitToCart(itemAttr(data))}
                  disabled={qty < 1}
                >
                  <AddShoppingCart />
                  &nbsp;
                  {textTranslate('addToCart')}
                </Button>
              </div>
            </section>
          </Grid>
        </Grid>
      </Paper>
      <ProductDesc description={data.description} arrSpeci={data.specification} />
      {/* <Typography variant="h6" className={classes.subtitle} gutterBottom>{textTranslate('relatedProducts')}</Typography>
      <Grid container className={classes.root} spacing={3}>
        <Grid item sm={4} xs={12}>
          <ProductCard
            discount="10%"
            thumbnail={imgApi[22]}
            name="Cras convallis lacus orci"
            desc="Phasellus ante massa, aliquam non ante at"
            ratting={3}
            price={18}
            prevPrice={20}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ProductCard
            soldout
            thumbnail={imgApi[23]}
            name="Lorem ipsum dolor sit amet"
            desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
            ratting={4}
            price={44}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <ProductCard
            soldout
            thumbnail={imgApi[27]}
            name="Lorem ipsum dolor sit amet"
            desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
            ratting={2}
            price={34}
          />
        </Grid>
      </Grid> */}
    </div>
  );
}


ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
  productIndex: undefined
};

export default withStyles(styles)(ProductDetail);
