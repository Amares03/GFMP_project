import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import FormTermsAndConditions from "../Forms/FormTermsAndConditions";
import { termsAndConditionsReducer } from "../Reducers";

const TermsAndConditionsForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(termsAndConditionsReducer, {
        id: data.id,
        terms_table: data.terms_table,
    });

    return (
        <>
            <div className="modal-body">
                <FormTermsAndConditions
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default TermsAndConditionsForm;
