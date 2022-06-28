import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import FormForOfficeUse from "../Forms/FormForOfficeUse";
import { forOfficeUseReducer } from "../Reducers";

const ForOfficeUseForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(forOfficeUseReducer, {
        id: data.id,
        application: data.application,
        payment_period: data.payment_period,
        cash: data.cash,
        months_3: data.months_3,
        months_6: data.months_6,
        other: data.other,
        monthly_instalment: data.monthly_instalment,
        authorized_signatory: data.authorized_signatory,
        plot_number: data.plot_number,
    });
    return (
        <>
            <div className="modal-body">
                <FormForOfficeUse
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default ForOfficeUseForm;
