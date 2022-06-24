import React, { Component } from 'react';
import { FaUserEdit, FaTrash } from "react-icons/fa";
// import axios from 'axios';
// import ViewModel from './Models/ViewModel';
// import UpdateModal from './Models/UpdateModal';
import DeleteModal from '../Modals/DeleteModal';



class TablesActionButton extends Component {
    constructor(props){
        super(props);
        this.state ={
            tableData: [],
        }
    }


    // change comming response to arry
     getArryList(data){
            var pdata = []
            let self = this;
            for(var i in data){
                pdata.push(data[i]);
            }
            self.setState({
                tableData: pdata,
            }) 
        }

    // Getting employees data
    // getUserDetails = (id,url) =>{
    //     axios
    //     .post('/get/individual/'+ url +'/details',{
    //         userId: id,
    //     }).then((response)=>{
            
    //     })
    // }


    render(){
        return(
               <div className="btn-group" role="group">
                        {/* <button type="button" className="btn btn-primary">View</button> */}
                        <button 
                        type="button" 
                        className="btn btn-info"
                        // data-bs-toggle="modal" 
                        // data-bs-target={"#updateModal"+ this.props.eachRowId}
                        // onClick={()=>{this.getUserDetails(this.props.eachRowId,this.props.url)}}
                        >
                            Update
                        </button>




                        <button
                         type="button" 
                         className="btn btn-danger"
                        data-bs-toggle="modal" 
                        data-bs-target={"#delete"+ this.props.url +"Modal"+ this.props.eachRowId}
                         >
                            <FaTrash/>
                        </button>
                        <DeleteModal modalId= {this.props.eachRowId} employeeData={ this.state } url={this.props.url}/>

                    </div>
        )
    }
}

export default TablesActionButton;