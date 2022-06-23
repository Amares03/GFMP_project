import React, { Component } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


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
                    // self.setState({
                    //     // tableData: response.data,
                        
                    // })
                    console.log(response);
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>certificate gose here</td>
                                </tr>
                            </tbody>
                        </table>
            </>
    );
    }
}




export default CertificateTable;