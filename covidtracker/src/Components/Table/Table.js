import React from "react"
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

class WorldTable extends React.Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
    }
    state = {
        stats: [],
        loading: false
    }

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTable: {
                root: {
                  backgroundColor: "inherit",
                 
                },
                paper: {
                  boxShadow: "none"
                }
              },
          MUIDataTableBodyCell: {
            root: {
              backgroundColor: "none",
              
            }
          }
        }
      })

      componentDidMount() {
             this.setState({ loading: true })
             fetch('https://disease.sh/v3/covid-19/states') //data source
                 .then(response => response.json())
                 .then(res => {
                     this.setState({ stats: res, loading: false })
                 })
                 .catch(error => {
                     console.log(error)
                 })
         }

render(){
    return(
        <React.Fragment>
          <div style={{marginLeft:'10px',marginRight:'10px'}}>   
           <br/>
            
              <MuiThemeProvider theme={this.getMuiTheme()}>
                <MUIDataTable 
                    title={<h1 style={{float:'left',color: '#A91934',}}>USA Covid-19 Stats</h1>}
                    isLoading={this.state.loading}
                    columns ={[
                        {
                            name: "state",
                            label: "State",
                            options: {
                            filter: true,
                            sort: true,
                            }
                        },
                        {
                            name: "cases",
                            label: "Total Cases",
                            options: {
                            filter: false,
                            sort: true,
                            }
                        },
                        {
                            name: "active",
                            label: "Active Cases",
                            options: {
                            filter: false,
                            sort: true,
                            }
                        },
                        {
                            name: "recovered",
                            label: "Recovered Patients",
                            options: {
                            filter: false,
                            sort: true,
                            }
                        },
                        {
                            name: "deaths",
                            label: "Total Deaths",
                            options: {
                            filter: false,
                            sort: true,
                            }
                        },
                    ]} 
                    
                    data = {this.state.stats}
                    
                    options = {{ 
                      print: false,
                      filter: true,
                      rowHover:true,
                      download: false,
                      filterType: 'multiselect', 
                      selectableRows: 'none',
                      rowsPerPageOptions: [10, 20, 35],
                      responsive: 'vertical',}}/>
               </MuiThemeProvider>
         </div>
      </React.Fragment>
    )
  }
}

export default WorldTable;
