import React, { Component } from 'react';
import axios from 'axios';
import TablesRow from '../TablesRow';

class ForOfficeUse extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getForOfficeUseData();
        }

        // Get data List.
        getForOfficeUseData = ()=>{
            let self = this; 
                axios
                .get('/get/for_office_use/data')
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
            <h4 className='text-left mt-3'>For Office Use Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='100px'>#</th>
                                    <th scope='col' width='100px'>Application</th>
                                    <th scope='col' width='100px'>Payment Period</th>
                                    <th scope='col' width='50px'>Cash</th>
                                    <th scope='col' width='50px'>3 Months</th>
                                    <th scope='col' width='50px'>6 Months</th>
                                    <th scope='col' width='100px'>Other</th>
                                    <th scope='col' width='100px'>Monthly Instalment</th>
                                    <th scope='col' width='100px'>Authorized Signatory</th>
                                    <th scope='col' width='100px'>Plot Number</th>
                                    <th scope='col' width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tableData.map(function(x,i){
                                        return <TablesRow key={i} data={x} url={'for_office_use'} />                                    })
                                }
                            </tbody>
                        </table>
            </>
    );
    }
}




export default ForOfficeUse;