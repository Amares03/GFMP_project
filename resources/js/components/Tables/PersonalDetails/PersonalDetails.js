import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


class PersonalDetails extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getPersonalDetailsData();
        }

        // Get data List.
        getPersonalDetailsData = ()=>{
            let self = this; 
                axios
                .get('/get/personal_details/data')
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
            <h4 className='text-left mt-3'>Personal Details Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='50px'>#</th>
                                    <th scope='col' width='50px'>Surname</th>
                                    <th scope='col' width='50px'>First Name</th>
                                    <th scope='col' width='50px'>date</th>
                                    <th scope='col' width='50px'>Martial Status</th>
                                    <th scope='col' width='50px'>Name Of Spouse</th>
                                    <th scope='col' width='50px'>Physical Address</th>
                                    <th scope='col' width='50px'>Postal Address</th>
                                    <th scope='col' width='50px'>Employer</th>
                                    <th scope='col' width='50px'>Occupation</th>
                                    <th scope='col' width='50px'>Tel No(Home)</th>
                                    <th scope='col' width='50px'>Cell</th>
                                    <th scope='col' width='50px'>Tel No(Business)</th>
                                    <th scope='col' width='50px'>Email</th>
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




export default PersonalDetails;