import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import FormPersonalDetails from "../Forms/FormPersonalDetails";
import { personalDetailsReducer } from "../Reducers";
const PersonalDetailsForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(personalDetailsReducer, {
        id: data.id,
        surname: data.surname,
        first_name: data.first_name,
        date: data.date,
        martial_status: data.martial_status,
        name_of_spouse: data.name_of_spouse,
        physical_address: data.physical_address,
        postal_address: data.postal_address,
        employer: data.employer,
        occupation: data.occupation,
        tel_no_home: data.tel_no_home,
        cell: data.cell,
        tel_no_business: data.tel_no_business,
        email: data.email,
    });

    return (
        <>
            <div className="modal-body">
                <FormPersonalDetails
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default PersonalDetailsForm;
