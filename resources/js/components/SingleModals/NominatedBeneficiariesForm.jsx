import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import { nominatedBeneficiariesReducer } from "../Reducers";

const NominatedBeneficiariesForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(nominatedBeneficiariesReducer, {
        id: data.id,
        name: data.name,
        age: data.age,
        relationship: data.relationship,
    });
    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };
    return (
        <>
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
            <FormButtons state={state} url={url} />
        </>
    );
};

export default NominatedBeneficiariesForm;
