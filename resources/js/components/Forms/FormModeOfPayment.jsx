import React from "react";

const FormModeOfPayment = ({ dispatch, state, show }) => {
    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };
    return (
        <form className="form">
            <div className="form-group">
                <div className="row">
                    {show ? (
                        <>
                            Id:{state.id} <br />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
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
    );
};

export default FormModeOfPayment;
