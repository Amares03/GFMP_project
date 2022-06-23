import React, { Component } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


class TableRow extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.certificate}</td>
                <td>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                    </div>
                </td>
            </tr>
        )
    }
}

export default TableRow;