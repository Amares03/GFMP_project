import React, { useReducer } from "react";

const ForOfficeUseForm = ({ data }) => {
    const reducer = (state, action, value) => {
        const x = toString(action.type);
        return { x: value };
    };

    const [state, dispatch] = useReducer(reducer, {
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

export default ForOfficeUseForm;
