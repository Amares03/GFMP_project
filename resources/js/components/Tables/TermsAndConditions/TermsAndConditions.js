import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


class TermsAndConditions extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getTermsAndConditionsData();
        }

        // Get data List.
        getTermsAndConditionsData = ()=>{
            let self = this; 
                axios
                .get('/get/terms_and_conditions/data')
                .then(function (response){
                    self.setState({
                        tableData: response.data, 
                        
                    })
                    // console.log(response);
                })
             }



    render(){
        return (
            <>
            <h4 className='text-left mt-3'>Terms And Conditions Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='50px'>#</th>
                                    <th scope='col' width='50px'>Terms Table</th>
                                    <th scope='col' width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tableData.map(function(x,i){
                                        return <TableRow key={i} data={x}/>
                                    })
                                }
                            </tbody>
                        </table>
            </>
    );
    }
}




export default TermsAndConditions;