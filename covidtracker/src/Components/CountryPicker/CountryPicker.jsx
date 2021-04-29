import React, {useState, useEffect} from 'react';  
import {NativeSelect, FormControl} from '@material-ui/core';  
import styles from './CountryPicker.module.css';  
import {fetchCountries} from '../../API';  
const CountryPicker = ({handleCountryChange}) => {  
const [fetchedCountires, setFetchedCountires] = useState([]);  
  
useEffect(()=>{  
    const fetchAPI = async () =>{  
        setFetchedCountires(await fetchCountries());  
    }  
    fetchAPI();  
}, [setFetchedCountires])  

    return (  
        <FormControl  className={styles.formControl}>      
        <NativeSelect defaultValue="" onChange ={(e) => handleCountryChange(e.target.value)}  variant="filled">  
            <option value="">Worldwide</option>  
    {fetchedCountires.map((country,i) => <option key={i} value={country}>{country}</option>)}  
        </NativeSelect>  
        </FormControl >  
    )  
}

export default CountryPicker;