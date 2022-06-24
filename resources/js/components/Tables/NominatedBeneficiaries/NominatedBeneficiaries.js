import React, { Component } from 'react';
import axios from 'axios';
import TablesRow from '../TablesRow';

class NominatedBeneficiaries extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getNominatedBeneficiariesData();
        }

        // Get data List.
        getNominatedBeneficiariesData = ()=>{
            let self = this; 
                axios
                .get('/get/nominated_beneficiaries/data')
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
            <h4 className='text-left mt-3'>Nominated Beneficiaries Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='50px'>#</th>
                                    <th scope='col' width='50px'>Name</th>
                                    <th scope='col' width='50px'>Age</th>
                                    <th scope='col' width='50px'>Relationship</th>
                                    <th scope='col' width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tableData.map(function(x,i){
                                            return <TablesRow key={i} data={x} url={'nominated_beneficiaries'}/>                                    })
                                }
                            </tbody>
                        </table>
            </>
    );
    }
}




export default NominatedBeneficiaries;