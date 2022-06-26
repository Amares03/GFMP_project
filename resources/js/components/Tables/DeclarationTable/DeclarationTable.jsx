import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";

const DeclarationTable = () => {
    const [tableData, setTableData] = useState([]);

    // Get data List.
    const getDeclarationData = () => {
        axios.get("/get/declaration/data").then(function (response) {
            setTableData(response.data);
        });

        // react Component life cycle
        useEffect(() => {
            getDeclarationData();
        }, []);
    };
    return (
        <>
            <h4 className="text-left mt-3">Declaration Table</h4>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col" width="100px">
                            #
                        </th>
                        <th scope="col" width="100px">
                            Blank1
                        </th>
                        <th scope="col" width="100px">
                            Blank2
                        </th>
                        <th scope="col" width="100px">
                            Blank3
                        </th>
                        <th scope="col" width="100px">
                            Blank4
                        </th>
                        <th scope="col" width="100px">
                            Blank5
                        </th>
                        <th scope="col" width="100px">
                            Blank6
                        </th>
                        <th scope="col" width="100px">
                            Blank7
                        </th>
                        <th scope="col" width="100px">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(function (x, i) {
                        return (
                            <TablesRow key={i} data={x} url={"declaration"} />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default DeclarationTable;
