import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    marginTop: 30,
    backgroundColor: `${theme.palette.primary[500]}`,
    borderTop: 'solid 3px #998643',
    paddingTop: '16px',
    overflowX: 'hidden'
  },
  footerSections: {
    margin: '0 16px'
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: '8px 16px 8px 16px',
    marginTop: '8px'
  },
  footerText: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: 1.5
  },
  white: {
    color: '#ffffff'
  }
})

class Footer extends Component {
  render () {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={4}>
            <Typography
              className={classNames(classes.footerText, classes.footerSections)}
            >
              <div vocab="http://schema.org/" typeof="Organization">
                <span property="name">
                  Franciscan University of Steubenville
                </span>
                <div property="address" typeof="PostalAddress">
                  <span property="streetAddress">
                    1235 University Boulevard
                  </span>
                  <span property="addressLocality" style={{ display: 'block' }}>
                    Steubenville, Ohio{' '}
                  </span>
                  <span property="postalCode">43952</span>
                </div>
                <span property="telephone">(740) 283-3771</span>
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={classNames(classes.footerText, classes.footerSections)}
            >
              Bacon ipsum dolor amet rump leberkas doner, andouille tenderloin
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              className={classNames(classes.footerText, classes.footerSections)}
            >
              Bacon ipsum dolor amet rump leberkas doner, andouille tenderloin
            </Typography>
          </Grid>
          <Grid className={classes.subFooter} item xs={12}>
            <Typography
              className={classes.white}
              variant="subheading"
              component={'span'}
            >
              © {currentYear} Franciscan University of Steubenville
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
