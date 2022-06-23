import React, { Component } from 'react';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import CertificateTable from './Tables/CertificateTable/CertificateTable';
import DeclarationTable from './Tables/DeclarationTable/DeclarationTable';


class Table extends Component {
        constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // // Life cycle Method
        // componentDidMount(){
        //     this.getCertificateData();
        // }

        // // Get data List.
        // getCertificateData = ()=>{
        //     let self = this; 
        //         axios
        //         .get('/get/certificate/list')
        //         .then(function (response){
        //             self.setState({
        //                 // tableData: response.data,
                        
        //             })
        //         })
        //      }




    render(){
        return (
        <div className="container">
        
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <CertificateTable/>
                        <DeclarationTable/>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}




export default Table;