import React, { Component, useEffect, useState } from "react";
import TablesActionButton from "./TablesActionButton";

const TablesRow = ({ data: tableData, url }) => {
    const [arry, setArray] = useState([]);
    const tableArray = [];
    useEffect(() => {
        getArryList();
    }, []);
    const getArryList = () => {
        for (var i in tableData) {
            tableArray.push(tableData[i]);
        }
        setArray(tableArray);
    };

    return (
        <tr>
            {arry.map((a, i) => (
                <td key={i}>{a}</td>
            ))}
            <td>
                <TablesActionButton eachRowId={tableData.id} url={url} />
            </td>
        </tr>
    );
};

export default TablesRow;
