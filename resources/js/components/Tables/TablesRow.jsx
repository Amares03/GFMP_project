import React, { Component, useEffect, useState } from "react";
import TablesActionButton from "./TablesActionButton";

const TablesRow = ({ data, url }) => {
    const [arry, setArray] = useState([]);
    const tableArray = [];
    useEffect(() => {
        getArryList();
    }, []);

    // change to Arry
    const getArryList = () => {
        for (var i in data) {
            tableArray.push(data[i]);
        }
        setArray(tableArray);
    };

    return (
        <tr>
            {arry.map((a, i) => {
                return <td key={i}>{a}</td>;
            })}
            <td>
                <TablesActionButton eachRowId={data.id} url={url} data={data} />
            </td>
        </tr>
    );
};

export default TablesRow;
