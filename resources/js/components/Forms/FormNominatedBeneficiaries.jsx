import React from "react";

const FormNominatedBeneficiaries = ({ dispatch, state, show }) => {
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
                    name:{" "}
                    <input
                        type="text"
                        id="name"
                        className="form-control mb-3"
                        value={state.name}
                        onChange={onChange}
                    />
                </div>
                <div className="row">
                    age:{" "}
                    <input
                        type="number"
                        id="age"
                        className="form-control mb-3"
                        value={state.age}
                        onChange={onChange}
                    />
                </div>
                <div className="row">
                    relationship:{" "}
                    <input
                        type="text"
                        id="relationship"
                        className="form-control mb-3"
                        value={state.relationship}
                        onChange={onChange}
                    />
                </div>
            </div>
        </form>
    );
};

export default FormNominatedBeneficiaries;
