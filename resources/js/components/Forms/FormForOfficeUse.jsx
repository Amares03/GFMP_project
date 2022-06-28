import React from "react";

const FormForOfficeUse = ({ dispatch, state, show }) => {
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
                        type="number"
                        id="cash"
                        className="form-control mb-3"
                        value={state.cash}
                        onChange={onChange}
                    />
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
                        type="number"
                        id="plot_number"
                        className="form-control mb-3"
                        value={state.plot_number}
                        onChange={onChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default FormForOfficeUse;
