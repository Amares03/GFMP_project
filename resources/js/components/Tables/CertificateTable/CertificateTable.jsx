import React, { Component, useLayoutEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";
import { Table } from "react-bootstrap";

const CertificateTable = () => {
    const [tableData, setTableData] = useState([]);
    // Get data List.
    const getCertificateData = () => {
        axios.get("/get/certificate/data").then(function (response) {
            setTableData(response.data);
        });
    };
    useLayoutEffect(() => {
        getCertificateData();
    }, []);
    return (
        <>
            <h4 className="text-left mt-3">Certificate Table</h4>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col" width="100px"></th>
                        <th scope="col" width="100px">
                            Certificate
                        </th>
                        <th scope="col" width="100px"></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(function (x, i) {
                        return (
                            <TablesRow key={i} data={x} url={"certificate"} />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default CertificateTable;
