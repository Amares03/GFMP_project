import React, { Component } from 'react';
import axios from 'axios';
// import TableRow from './TableRow';
import TablesRow from '../TablesRow';

class DeclarationTable extends Component {
constructor(props){
            super(props);
            this.state = {
                tableData: [],
            }
        }

        // Life cycle Method
        componentDidMount(){
            this.getDeclarationData();
        }

        // Get data List.
        getDeclarationData = ()=>{
            let self = this; 
                axios
                .get('/get/declaration/data')
                .then(function (response){
                    self.setState({
                        tableData: response.data, 
                        
                    })
                    
                })
             }



    render(){
        return (
            <>
            <h4 className='text-left mt-3'>Declaration Table</h4>
                        <table className="table table-hover ">
                            <thead>
                                <tr>
                                    <th scope='col' width='100px'>#</th>
                                    <th scope='col' width='100px'>Blank1</th>
                                    <th scope='col' width='100px'>Blank2</th>
                                    <th scope='col' width='100px'>Blank3</th>
                                    <th scope='col' width='100px'>Blank4</th>
                                    <th scope='col' width='100px'>Blank5</th>
                                    <th scope='col' width='100px'>Blank6</th>
                                    <th scope='col' width='100px'>Blank7</th>
                                    <th scope='col' width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tableData.map(function(x,i){
                                        return <TablesRow key={i} data={x}/>
                                    })
                                }
                            </tbody>
                        </table>
            </>
    );
    }
}




export default DeclarationTable;