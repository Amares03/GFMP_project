import React from "react";
import { updateUsers } from "./Modals/UpdateModal";

const FormButtons = ({ state, url }) => {
    return (
        <div className="modal-footer">
            <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                    updateUsers(state, url);
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
    );
};

export default FormButtons;
