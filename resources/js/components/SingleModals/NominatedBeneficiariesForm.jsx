import React, { useReducer } from "react";

const NominatedBeneficiariesForm = ({ data }) => {
    const reducer = (state, action, value) => {
        const x = toString(action.type);
        return { x: value };
    };

    const [state, dispatch] = useReducer(reducer, {
        name: data.name,
        age: data.age,
        relationship: data.relationship,
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

export default NominatedBeneficiariesForm;
