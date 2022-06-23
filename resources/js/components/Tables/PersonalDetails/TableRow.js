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
                {
                this.state.tableData.map(function(x,i){
                                        return <td>{x}</td>
                                    })
                }
                
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