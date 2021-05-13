import axios from 'axios';

export const fetchCountryData = async (country) => {
  let changableurl;
  
  if(country) {
    changableurl = `https://disease.sh/v3/covid-19/countries/${country}`;
  }
  else {
    changableurl = `https://disease.sh/v3/covid-19/all`;
  }
  try {
    let { data: {cases, recovered, deaths, updated} } = await axios.get(changableurl);
    let confirmed = {value: cases};
    recovered = {value: recovered};
    deaths = {value: deaths};
    let lastUpdate = updated;
    return {confirmed, recovered, deaths, lastUpdate};
  }
  catch(error) {
    console.log(error);
  }
};

export const fetchStateData = async (state) => {
  let changableurl;
  
  if(state) {
    changableurl = `https://disease.sh/v3/covid-19/states/${state}`;
  }
  else {
    changableurl = `https://disease.sh/v3/covid-19/states`;
  }
  try {
    let { data: {cases, active, deaths, updated} } = await axios.get(changableurl);
    let confirmed = {value: cases};
    let recovered = {value: cases} - ( {value: active} + {value: deaths} );
    deaths = {value: deaths};
    let lastUpdate = updated;
    return {confirmed, recovered, deaths, lastUpdate};
  }
  catch(error) {
    console.log(error);
  }
};

export const fetchDailyData = async () =>{  
  try{  
      const {data}  = await axios.get(`https://covid19.mathdro.id/api/daily`);  
      const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }));
      return modifiedData;
    } catch (error) {}
};  

export const fetchCountries = async () =>{
  try{  
  const {data:countries} = await axios.get(`https://disease.sh/v3/covid-19/countries`);  
  return countries.map((country)=> country.country);  
  }     
  catch(error){  
      return error;
  }  
};

export const fetchStates = async () =>{
  try{  
  const {data:states} = await axios.get(`https://disease.sh/v3/covid-19/states`);  
  return states.map((state)=> state.state);  
  }     
  catch(error){  
      return error;
  }  
};