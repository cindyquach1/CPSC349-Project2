import React from 'react';  
import styles from './App.module.css';  
import {Cards, Charts, CountryPicker, Links, Table } from './Components';
import {fetchCountryData} from './API';//we dont have to specify index file name if your file name is index  
import coronaImage from './images/covid19.jpeg';  
class App extends React.Component {  
    state = {         
    data: {},  
    country: '',
    }
    async componentDidMount(){
        const data = await fetchCountryData();
        //console.log(fetchedData);
        this.setState({data});
    }

    handleCountryChange = async (country) => {
        const data = await fetchCountryData(country);
        this.setState({data: data, country: country});
    }

    render(){
        const {data, country} = this.state;
        return(
        <div  className={styles.container} >
            <img className={styles.image} src={coronaImage} alt="Covid-19"/>
            <Cards data={data}/>
            <Links data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Charts data={data} country={country}/>
            <Table/>
            <h6>This site was developed by WebTogether</h6>
        </div>
    )}
}  
  
export default App; 