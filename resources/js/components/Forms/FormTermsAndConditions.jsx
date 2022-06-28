import React from "react";

const FormTermsAndConditions = ({ dispatch, state, show }) => {
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
                    terms_table:{" "}
                    <input
                        type="text"
                        id="terms_table"
                        className="form-control mb-3"
                        value={state.terms_table}
                        onChange={onChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default FormTermsAndConditions;
