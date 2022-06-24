import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';
import TablesRow from '../TablesRow';


class CertificateTable extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getCertificateData();
        }

        // Get data List.
        getCertificateData = ()=>{
            let self = this; 
                axios
                .get('/get/certificate/data')
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
            <h4 className='text-left mt-3'>Certificate Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='100px'>#</th>
                                    <th scope='col' width='100px'>Certificate</th>
                                    <th scope='col' width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tableData.map(function(x,i){
                                        return <TablesRow key={i} data={x} url={'certificate'}/>
                                    })
                                }
                            </tbody>
                        </table>
            </>
    );
    }
}




export default CertificateTable;