import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


class ModeOfPayment extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getModeOfPaymentData();
        }

        // Get data List.
        getModeOfPaymentData = ()=>{
            let self = this; 
                axios
                .get('/get/mode_of_payment/data')
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
            <h4 className='text-left mt-3'>Mode of payment Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='50px'>#</th>
                                    <th scope='col' width='50px'>3 Months</th>
                                    <th scope='col' width='50px'>6 Months</th>
                                    <th scope='col' width='50px'>amount of initial disposal</th>
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




export default ModeOfPayment;