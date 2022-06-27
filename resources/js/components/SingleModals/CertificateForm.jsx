import axios from "axios";
import React, { useReducer } from "react";
import { updateUsers } from "../Modals/UpdateModal";

function CertificateForm({ data, url }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case "certificate":
                return { ...state, certificate: action.payload };
            default:
                return { state };
        }
    };
    const [state, dispatch] = useReducer(reducer, {
        id: data.id,
        certificate: data.certificate,
    });

    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };

    const updateUser = () => {
        axios.post("update/certificate/user", state).then((response) => {});
        // console.log(state);
    };
    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Update Certificate User{" "}
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
                <form className="form">
                    <div className="form-group">
                        Id:{data.id} <br />
                        Certificate:{" "}
                        <input
                            type="text"
                            id="certificate"
                            className="form-control mb-3"
                            value={state.certificate}
                            onChange={onChange}
                        />
                    </div>
                </form>
            </div>
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
        </>
    );
}

export default CertificateForm;
