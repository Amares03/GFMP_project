import React, { Component } from 'react';


class TableRow extends Component {
    constructor(props){
        super(props);
         this.state ={
            tableData: [],
        }

    }

      // Life cycle Method
        componentDidMount(){
            this.getArryList();
        }

    // change to arry
    getArryList(){
        var data = this.props.data;
            var pdata = []
            let self = this;
            for(var i in data){
                pdata.push(data[i]);
            }
            self.setState({
                tableData: pdata,
            }) 
        }
    

    render(){
        return(
            <tr>
                <td>{this.state.tableData[0]}</td>
                <td>{this.state.tableData[1]}</td>
                <td>{this.state.tableData[2]}</td>
                <td>{this.state.tableData[3]}</td>
                <td>{this.state.tableData[4]}</td>
                <td>{this.state.tableData[5]}</td>
                <td>{this.state.tableData[6]}</td>
                <td>{this.state.tableData[7]}</td>
                <td>{this.state.tableData[8]}</td>
                <td>{this.state.tableData[9]}</td>
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