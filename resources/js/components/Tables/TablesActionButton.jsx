import axios from "axios";
import React, { useState } from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import DeleteModal from "../Modals/DeleteModal";

const TablesActionButton = ({ eachRowId, url, data }) => {
    const [arry, setArray] = useState([]);
    const tableArray = [];

    const getUserDetails = (id) => {
        // axios.get(`get/certificate/user/` + id).then((response) => {

        // });
        console.log(data);
    };
    // change it to Array
    const getArryList = (data) => {
        for (var i in data) {
            tableArray.push(data[i]);
        }
        setArray(tableArray);
    };

    return (
        <div className="btn-group" role="group">
            {/* <button type="button" className="btn btn-primary">View</button> */}
            <button
                type="button"
                className="btn btn-info"
                // data-bs-toggle="modal"
                // data-bs-target={"#update" + url + "Modal" + eachRowId}
                onClick={() => {
                    getUserDetails(eachRowId);
                }}
            >
                Update
            </button>

            <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target={"#delete" + url + "Modal" + eachRowId}
            >
                <FaTrash />
            </button>
            <DeleteModal modalId={eachRowId} url={url} data={data} />
        </div>
    );
};

export default TablesActionButton;
