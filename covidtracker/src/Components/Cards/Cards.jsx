import React from 'react';  
import styles from './Cards.module.css'  
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';  
import CountUp from 'react-countup';  
import cx from 'classnames';  
import Button from '@material-ui/core/Button';  

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } } ) => {  
    if(!confirmed){  
      return 'Please wait..';  
  }
  const active = confirmed["value"] - recovered["value"] - deaths["value"];
  console.log(lastUpdate);

  return (
      <div className={styles.container}>
          <Grid container spacing = {4} justify="center">
              <Grid style={{backgroundColor: 'rgba(226, 106, 106, 1)'}} item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>  
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                      <Typography variant="h5">
                          <CountUp start={0} end={confirmed.value} duration={3} separator="," />
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of confirmed cases of Covid-19</Typography>
                  </CardContent>
              </Grid>

              <Grid style={{backgroundColor: 'rgba(250, 190, 88, 1)'}} item component={Card} xs={12} md={2} className={cx(styles.card, styles.active)}>  
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Active</Typography>
                      <Typography variant="h5">
                          <CountUp start={0} end={active} duration={3} separator="," />
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of active cases of Covid-19</Typography>
                  </CardContent>
              </Grid>

              <Grid style={{backgroundColor: 'rgba(188, 253, 188, 0.5)'}} item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>  
                  <CardContent>  
                      <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                      <Typography variant="h5">
                          <CountUp start={0} end={recovered.value} duration={3} separator="," />  
                      </Typography>  
                      <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>  
                      <Typography variant="body2">Number of recoveries from Covid-19</Typography>  
                  </CardContent>  
              </Grid>  

              <Grid style={{backgroundColor: 'rgba(189, 195, 199, 1)'}}  item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>  
                  <CardContent>  
                      <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                      <Typography variant="h5">
                          <CountUp start={0} end={deaths.value} duration={3} separator="," />
                      </Typography>
                      <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of deaths caused by Covid-19</Typography>
                  </CardContent>
              </Grid>
          </Grid>
      </div>
  )
}

export default Cards;