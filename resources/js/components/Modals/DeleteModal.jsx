import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "../../../css/app.css";

const DeleteModal = ({ url, modalId }) => {
    // delete function for employee data
    const deleteUserData = (id, url) => {
        axios.delete(`/delete/${url}/data/` + id).then(() => {
            toast.error("User Deleted Successfully");
            location.reload();
        });
    };

    return (
        <div
            className={"modal fade shaddow " + style.shaddow}
            id={"delete" + url + "Modal" + modalId}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Delete User{" "}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        Are you sure, you want to delete this user data
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                deleteUserData(modalId, url);
                            }}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
