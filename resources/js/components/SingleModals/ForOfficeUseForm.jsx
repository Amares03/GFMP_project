import React, { useReducer } from "react";
import { updateUsers } from "../Modals/UpdateModal";

const ForOfficeUseForm = ({ data, url }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "application":
                return { ...state, application: action.payload };
            case "payment_period":
                return { ...state, payment_period: action.payload };
            case "cash":
                return { ...state, cash: action.payload };
            case "months_3":
                return { ...state, months_3: action.payload };
            case "months_6":
                return { ...state, months_6: action.payload };
            case "other":
                return { ...state, other: action.payload };
            case "monthly_instalment":
                return { ...state, monthly_instalment: action.payload };
            case "authorized_signatory":
                return { ...state, authorized_signatory: action.payload };
            case "plot_number":
                return { ...state, plot_number: action.payload };
            default:
                return { state };
        }
    };

    const [state, dispatch] = useReducer(reducer, {
        id: data.id,
        application: data.application,
        payment_period: data.payment_period,
        cash: data.cash,
        months_3: data.months_3,
        months_6: data.months_6,
        other: data.other,
        monthly_instalment: data.monthly_instalment,
        authorized_signatory: data.authorized_signatory,
        plot_number: data.plot_number,
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
                            Application:{" "}
                            <input
                                type="text"
                                id="application"
                                className="form-control mb-3"
                                value={state.application}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            payment_period:{" "}
                            <input
                                type="text"
                                id="payment_period"
                                className="form-control mb-3"
                                value={state.payment_period}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            cash:{" "}
                            <input
                                type="text"
                                id="cash"
                                className="form-control mb-3"
                                value={state.cash}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            months_3:{" "}
                            <input
                                type="text"
                                id="months_3"
                                className="form-control mb-3"
                                value={state.months_3}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            months_6:{" "}
                            <input
                                type="text"
                                id="months_6"
                                className="form-control mb-3"
                                value={state.months_6}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            other:{" "}
                            <input
                                type="text"
                                id="other"
                                className="form-control mb-3"
                                value={state.other}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            monthly_instalment:{" "}
                            <input
                                type="text"
                                id="monthly_instalment"
                                className="form-control mb-3"
                                value={state.monthly_instalment}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            authorized_signatory:{" "}
                            <input
                                type="text"
                                id="authorized_signatory"
                                className="form-control mb-3"
                                value={state.authorized_signatory}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            plot_number:{" "}
                            <input
                                type="text"
                                id="plot_number"
                                className="form-control mb-3"
                                value={state.plot_number}
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

export default ForOfficeUseForm;
