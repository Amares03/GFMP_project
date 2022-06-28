import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import { modeOfPaymentReducer } from "../Reducers";

const ModeOfPaymentForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(modeOfPaymentReducer, {
        id: data.id,
        months_3: data.months_3,
        months_6: data.months_6,
        amount_of_initial_disposal: data.amount_of_initial_disposal,
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
            <FormButtons state={state} url={url} />
        </>
    );
};

export default ModeOfPaymentForm;
