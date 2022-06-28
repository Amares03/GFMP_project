import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import FormNominatedBeneficiaries from "../Forms/FormNominatedBeneficiaries";
import { nominatedBeneficiariesReducer } from "../Reducers";

const NominatedBeneficiariesForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(nominatedBeneficiariesReducer, {
        id: data.id,
        name: data.name,
        age: data.age,
        relationship: data.relationship,
    });

    return (
        <>
            <div className="modal-body">
                <FormNominatedBeneficiaries
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default NominatedBeneficiariesForm;
