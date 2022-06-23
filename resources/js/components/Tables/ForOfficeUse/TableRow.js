import React, { Component } from 'react';


class TableRow extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.application}</td>
                <td>{this.props.data.payment_period}</td>
                <td>{this.props.data.cash}</td>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.other}</td>
                <td>{this.props.data.monthly_instalment}</td>
                <td>{this.props.data.authorized_signatory}</td>
                <td>{this.props.data.plot_number}</td>
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