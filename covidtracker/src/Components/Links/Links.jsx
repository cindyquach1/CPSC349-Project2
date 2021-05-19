import React from 'react';  
import styles from './Links.module.css';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';  

const Links = () => {  
    
    return (
        <div className={styles.container}>
            <Grid>
                <Grid className={styles.btnGrid} >
                    <Button style={{backgroundColor: '#004D40'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://disease.sh/">  
                    source
                    </Button>
                    <Button  style={{backgroundColor: '#4A148C'}} className={styles.btnMyGov}  variant="contained" color="primary" href="https://github.com/cindyquach1/CPSC349-Project2">  
                    github  
                    </Button>
                </Grid> 
            </Grid>
        </div>
    )
}

export default Links;