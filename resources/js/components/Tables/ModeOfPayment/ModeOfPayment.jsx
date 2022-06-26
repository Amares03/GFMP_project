import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";

const ModeOfPayment = () => {
    const [tableData, setTableData] = useState([]);

    // Get data List.
    const getModeOfPaymentData = () => {
        axios.get("/get/mode_of_payment/data").then(function (response) {
            setTableData(response.data);
        });
    };

    useEffect(() => {
        getModeOfPaymentData();
    }, []);
    return (
        <>
            <h4 className="text-left mt-3">Mode of payment Table</h4>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col" width="50px">
                            #
                        </th>
                        <th scope="col" width="50px">
                            3 Months
                        </th>
                        <th scope="col" width="50px">
                            6 Months
                        </th>
                        <th scope="col" width="50px">
                            amount of initial disposal
                        </th>
                        <th scope="col" width="100px">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(function (x, i) {
                        return (
                            <TablesRow
                                key={i}
                                data={x}
                                url={"mode_of_payment"}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ModeOfPayment;
