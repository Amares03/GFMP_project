import React, { Component, useLayoutEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";

const TermsAndConditions = () => {
    const [tableData, setTableData] = useState([]);

    // Get data List.
    const getTermsAndConditionsData = () => {
        axios.get("/get/terms_and_conditions/data").then(function (response) {
            setTableData(response.data);
        });
    };

    // component life cycle
    useLayoutEffect(() => {
        getTermsAndConditionsData();
    }, []);
    return (
        <>
            <h4 className="text-left mt-3">Terms And Conditions Table</h4>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col" width="50px">
                            #
                        </th>
                        <th scope="col" width="50px">
                            Terms Table
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
                                url={"terms_and_conditions"}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TermsAndConditions;
