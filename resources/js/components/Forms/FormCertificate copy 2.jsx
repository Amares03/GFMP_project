import React from "react";

const FormCertificate = ({ dispatch, state, show }) => {
    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };
    return (
        <form className="form">
            <div className="form-group">
                {show ? (
                    <>
                        Id:{state.id} <br />
                    </>
                ) : (
                    <></>
                )}
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
    );
};

export default FormCertificate;
