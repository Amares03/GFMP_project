import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";

const NominatedBeneficiaries = () => {
    const [tableData, setTableData] = useState([]);

    // Get data List.
    const getNominatedBeneficiariesData = () => {
        axios
            .get("/get/nominated_beneficiaries/data")
            .then(function (response) {
                setTableData(response.data);
            });
    };

    // component life cycle
    useEffect(() => {
        getNominatedBeneficiariesData();
    }, []);
    return (
        <>
            <h4 className="text-left mt-3">Nominated Beneficiaries Table</h4>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col" width="50px">
                            #
                        </th>
                        <th scope="col" width="50px">
                            Name
                        </th>
                        <th scope="col" width="50px">
                            Age
                        </th>
                        <th scope="col" width="50px">
                            Relationship
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
                                url={"nominated_beneficiaries"}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default NominatedBeneficiaries;
