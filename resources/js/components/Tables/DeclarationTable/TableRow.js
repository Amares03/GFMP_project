import React, { Component } from 'react';


class TableRow extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.Blank1}</td>
                <td>{this.props.data.Blank2}</td>
                <td>{this.props.data.Blank3}</td>
                <td>{this.props.data.Blank4}</td>
                <td>{this.props.data.Blank5}</td>
                <td>{this.props.data.Blank6}</td>
                <td>{this.props.data.Blank7}</td>
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