import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";

const products = [
  // { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  // { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  // { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  // { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  // { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA"
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing(1)}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  },
  orderSummary: {
    margin: "0 auto",
    padding: theme.spacing(3)
  },
  address: {
    padding: theme.spacing(3),
    borderRadius: theme.rounded.medium,
    border: `2px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(3)
  },
  totalRow: {
    borderTop: `2px dashed ${theme.palette.primary.main}`
  }
});

function Review(props) {
  const { classes } = props;

  const { t, i18n } = useTranslation();
  const textTranslate = text => {
    return i18n.exists(text) ? t(text) : text;
  };
  const payments = [
    { name: `${textTranslate("cardType")}`, detail: "Visa" },
    { name: `${textTranslate("cardHolder")}`, detail: "Mr John Smith" },
    { name: `${textTranslate("cardNumber")}`, detail: "xxxx-xxxx-xxxx-1234" },
    { name: `${textTranslate("expiryDate")}`, detail: "04/2024" }
  ];

  return (
    <Fragment>
      <div className={classes.orderSummary}>
        <Typography variant="h6" gutterBottom>
          {textTranslate("orderSummary")}
        </Typography>
        <List>
          {products.map(product => (
            <Fragment key={product.name}>
              <ListItem className={classes.listItem}>
                <ListItemText primary={product.name} secondary={product.desc} />
                <Typography variant="body2">{product.price}</Typography>
              </ListItem>
              <li>
                <Divider />
              </li>
            </Fragment>
          ))}
          <Fragment key="shiping-fee">
            <ListItem className={classes.listItem}>
              <ListItemText
                primary={textTranslate("shippingFee")}
                secondary=""
              />
              <Typography variant="body2">{textTranslate("free")}</Typography>
            </ListItem>
            <li>
              <Divider />
            </li>
          </Fragment>
          <ListItem className={classNames(classes.listItem, classes.totalRow)}>
            <ListItemText primary={textTranslate("total")} />
            <Typography variant="subtitle1" className={classes.total}>
              $0
            </Typography>
          </ListItem>
        </List>
        <div className={classes.address}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                {textTranslate("shippingDetail")}
              </Typography>
              <Typography gutterBottom>John Smith</Typography>
              <Typography gutterBottom>{addresses.join(", ")}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                {textTranslate("paymentDetails")}
              </Typography>
              <Grid container>
                {payments.map(payment => (
                  <Fragment key={payment.name}>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.detail}</Typography>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
