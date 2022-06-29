import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";

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
            <table className="table table-hover " responsive="sm">
                <thead>
                    <tr>
                        <th scope="col" width="50px">
                            #
                        </th>
                        <th scope="col" width="50px">
                            Surname
                        </th>
                        <th scope="col" width="50px">
                            First Name
                        </th>
                        <th scope="col" width="50px">
                            date
                        </th>
                        <th scope="col" width="50px">
                            Martial Status
                        </th>
                        <th scope="col" width="50px">
                            Name Of Spouse
                        </th>
                        <th scope="col" width="50px">
                            Physical Address
                        </th>
                        <th scope="col" width="50px">
                            Postal Address
                        </th>
                        <th scope="col" width="50px">
                            Employer
                        </th>
                        <th scope="col" width="50px">
                            Occupation
                        </th>
                        <th scope="col" width="50px">
                            Tel No(Home)
                        </th>
                        <th scope="col" width="50px">
                            Cell
                        </th>
                        <th scope="col" width="50px">
                            Tel No(Business)
                        </th>
                        <th scope="col" width="50px">
                            Email
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
                                url={"personal_details"}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default PersonalDetails;
