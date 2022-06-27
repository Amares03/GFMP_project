import React, { useReducer } from "react";
import { updateUsers } from "../Modals/UpdateModal";

const ModeOfPaymentForm = ({ data, url }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "months_3":
                return { ...state, months_3: action.payload };
            case "months_6":
                return { ...state, months_6: action.payload };
            case "amount_of_initial_disposal":
                return { ...state, amount_of_initial_disposal: action.payload };
            default:
                return { state };
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        id: data.id,
        months_3: data.months_3,
        months_6: data.months_6,
        amount_of_initial_disposal: data.amount_of_initial_disposal,
    });
    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };
    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Update Declaration User{" "}
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
                        <div className="row">Id:{" " + data.id}</div>
                        <div className="row">
                            months_3:{" "}
                            <input
                                type="number"
                                id="months_3"
                                className="form-control mb-3"
                                value={state.months_3}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            months_6:{" "}
                            <input
                                type="number"
                                id="months_6"
                                className="form-control mb-3"
                                value={state.months_6}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            amount_of_initial_disposal:{" "}
                            <input
                                type="text"
                                id="amount_of_initial_disposal"
                                className="form-control mb-3"
                                value={state.amount_of_initial_disposal}
                                onChange={onChange}
                            />
                        </div>
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
};

export default ModeOfPaymentForm;
