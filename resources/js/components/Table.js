import React, { Component } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


class Table extends Component {
        constructor(props){
            super(props);
            this.state = {
                employees: [],
            }
        }

        // Life cycle Method
        // componentDidMount(){
        //     this.getEmployeeList();
        // }

        // Get Employee List.
        // getEmployeeList = ()=>{
        //     let self = this; 
        //         axios
        //         .get('/get/employee/list')
        //         .then(function (response){
        //             self.setState({
        //                 employees: response.data,
        //             })
        //         })
        //      }




    render(){
        return (
        <div className="container">
        
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h2 className='text-center mt-3'>Certificate Table</h2>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='100px'>#</th>
                                    <th scope='col' width='100px'>Certificate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>certificate gose here</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}




export default Table;