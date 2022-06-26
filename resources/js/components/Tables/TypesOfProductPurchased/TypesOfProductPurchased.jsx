import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import TablesRow from "../TablesRow";

const TypesOfProductPurchased = () => {
    const [tableData, setTableData] = useState([]);
    // Get data List.
    const getTypesOfProductPurchasedData = () => {
        axios
            .get("/get/types_of_product_purchased/data")
            .then(function (response) {
                setTableData(response.data);
            });
    };

    // component life cycle
    useEffect(() => {
        getTypesOfProductPurchasedData();
    }, []);
    return (
        <>
            <h4 className="text-left mt-3">Types Of Product Purchased Table</h4>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col" width="50px">
                            #
                        </th>
                        <th scope="col" width="50px">
                            Glen Forest Memorial Park
                        </th>
                        <th scope="col" width="50px">
                            Chemhute Park
                        </th>
                        <th scope="col" width="50px">
                            Matidoda Park
                        </th>
                        <th scope="col" width="50px">
                            Single Unit
                        </th>
                        <th scope="col" width="50px">
                            Double Unit
                        </th>
                        <th scope="col" width="50px">
                            Triple Unit
                        </th>
                        <th scope="col" width="50px">
                            Family Close
                        </th>
                        <th scope="col" width="50px">
                            Other (please give details)
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
                                url={"types_of_product_purchased"}
                            />
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TypesOfProductPurchased;
