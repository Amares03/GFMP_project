import React, { useReducer } from "react";

const ModeOfPaymentForm = ({ data }) => {
    const reducer = (state, action, value) => {
        const x = toString(action.type);
        return { x: value };
    };

    const [state, dispatch] = useReducer(reducer, {
        months_3: data.months_3,
        months_6: data.months_6,
        amount_of_initial_disposal: data.amount_of_initial_disposal,
    });
    const onChange = (event) => {
        const newValue = event.target.value;
        dispatch({ type: newValue });
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
                        console.log("clicked");
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
