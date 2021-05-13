import React from 'react';  
import styles from './Cards.module.css'  
import {Card, CardContent, Typography, Grid} from '@material-ui/core';  
import CountUp from 'react-countup';  
import cx from 'classnames';  

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } } ) => {  
    if(!confirmed){  
        return 'Please wait..';  
    }

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
                            <CountUp start={0} end={confirmed.value - recovered.value - deaths.value} duration={3} separator="," />
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

                <Grid style={{backgroundColor: 'rgba(137, 196, 244, 1)'}}  item component={Card} xs={12} md={2} className={cx(styles.card, styles.predicted)}>  
                    <CardContent>  
                        <Typography color="textSecondary" gutterBottom>Predicted</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={(confirmed.value*5 + deaths.value*500)/2} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of predicted actual cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        
    )
}

export default Cards;