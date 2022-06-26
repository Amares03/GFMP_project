import React from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import DeleteModal from "../Modals/DeleteModal";

const TablesActionButton = ({ eachRowId, url, data }) => {
    return (
        <div className="btn-group" role="group">
            {/* <button type="button" className="btn btn-primary">View</button> */}
            <button
                type="button"
                className="btn btn-info"
                // data-bs-toggle="modal"
                // data-bs-target={"#updateModal"+ this.props.eachRowId}
                // onClick={()=>{this.getUserDetails(this.props.eachRowId,this.props.url)}}
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
