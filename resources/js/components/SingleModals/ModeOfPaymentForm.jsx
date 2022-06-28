import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import FormModeOfPayment from "../Forms/FormModeOfPayment";
import { modeOfPaymentReducer } from "../Reducers";

const ModeOfPaymentForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(modeOfPaymentReducer, {
        id: data.id,
        months_3: data.months_3,
        months_6: data.months_6,
        amount_of_initial_disposal: data.amount_of_initial_disposal,
    });

    return (
        <>
            <div className="modal-body">
                <FormModeOfPayment
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default ModeOfPaymentForm;
