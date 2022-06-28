import React, { useReducer } from "react";
import FormCertificate from "./FormCertificate";
import { certificateReducer } from "../Reducers";
const CreateForm = () => {
    const [state, dispatch] = useReducer(certificateReducer, {
        certificate: "",
    });
    return (
        <div>
            <FormCertificate dispatch={dispatch} state={state} show={false} />
        </div>
    );
};

export default CreateForm;
