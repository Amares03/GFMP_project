import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";
import { Table } from "react-bootstrap";

const PersonalDetails = () => {
    const [tableData, setTableData] = useState([]);

    // Get data List.
    const getPersonalDetailsData = () => {
        axios.get("/get/personal_details/data").then(function (response) {
            setTableData(response.data);
        });
    };

    //component life cycle
    useLayoutEffect(() => {
        getPersonalDetailsData();
    }, []);
    return (
        <>
            <h4 className="text-left mt-3">Personal Details Table</h4>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Surname</th>
                        <th scope="col">First Name</th>
                        <th scope="col">date</th>
                        <th scope="col">Martial Status</th>
                        <th scope="col">Name Of Spouse</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Physical Address</th>
                        <th scope="col">Postal Address</th>
                        <th scope="col">Employer</th>
                        <th scope="col">Occupation</th>
                        <th scope="col">Tel No(Home)</th>
                        <th scope="col">Cell</th>
                        <th scope="col">Tel No(Business)</th>
                        <th scope="col">Email</th>
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
                                url={"personal_details"}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default PersonalDetails;
