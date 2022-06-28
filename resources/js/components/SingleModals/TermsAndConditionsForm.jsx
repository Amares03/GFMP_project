import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import { termsAndConditionsReducer } from "../Reducers";
const TermsAndConditionsForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(termsAndConditionsReducer, {
        id: data.id,
        terms_table: data.terms_table,
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
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default TermsAndConditionsForm;
