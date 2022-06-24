import React, { Component } from 'react';
import TablesActionButton from './TablesActionButton';

class TablesRow extends Component {
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
                                        return <td key={i}>{x}</td>
                                    })
                }
                <td>
                    <TablesActionButton eachRowId={this.props.data.id} url={this.props.url}/>
                </td>
            </tr>
        )
    }
}

export default TablesRow;