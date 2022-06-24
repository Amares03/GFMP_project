import React, { Component } from 'react';
import axios from 'axios';
import TablesRow from '../TablesRow';


class TypesOfProductPurchased extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getTypesOfProductPurchasedData();
        }

        // Get data List.
        getTypesOfProductPurchasedData = ()=>{
            let self = this; 
                axios
                .get('/get/types_of_product_purchased/data')
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
            <h4 className='text-left mt-3'>Types Of Product Purchased Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='50px'>#</th>
                                    <th scope='col' width='50px'>Glen Forest Memorial Park</th>
                                    <th scope='col' width='50px'>Chemhute Park</th>
                                    <th scope='col' width='50px'>Matidoda Park</th>
                                    <th scope='col' width='50px'>Single Unit</th>
                                    <th scope='col' width='50px'>Double Unit</th>
                                    <th scope='col' width='50px'>Triple Unit</th>
                                    <th scope='col' width='50px'>Family Close</th>
                                    <th scope='col' width='50px'>Other (please give details)</th>
                                    <th scope='col' width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tableData.map(function(x,i){
                                            return <TablesRow key={i} data={x} url={'types_of_product_purchased'}/>                                    })
                                }
                            </tbody>
                        </table>
            </>
    );
    }
}




export default TypesOfProductPurchased;