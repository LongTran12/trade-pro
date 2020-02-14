import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'dan-api/dummy/brand';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import ReactToPrint from 'react-to-print';
import { PapperBlock, CommercialInvoice } from 'dan-components';
import { useTranslation } from 'react-i18next';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  btnArea: {
    textAlign: 'center'
  },
  wrapper: {
    width: '100%',
    overflow: 'auto'
  }
});

const TextTranslate = ({ text }) => {
  const { t, i18n } = useTranslation();
  return i18n.exists(text)
    ? t(text) : text;
}
class Invoice extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Dynamic Invoice';
    const description = brand.desc;
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
        <PapperBlock title={<TextTranslate text="editInvoice" />} icon="ios-document-outline" desc={<TextTranslate text="anEdit" />}>
          <div className={classes.btnArea}>
            <ReactToPrint
              trigger={() => (
                <Button className={classes.button} size="small" variant="contained" color="secondary">
                  <PrintIcon className={classes.extendedIcon} />
                  {<TextTranslate text="printInvoice" />}
                </Button>
              )}
              content={() => this.componentRef}
            />
          </div>
          <section className={classes.wrapper}>
            <CommercialInvoice ref={(el) => { this.componentRef = el; }} />
          </section>
        </PapperBlock>
      </div>
    );
  }
}

Invoice.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Invoice);
