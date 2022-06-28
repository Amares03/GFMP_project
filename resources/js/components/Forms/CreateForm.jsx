import React, { useReducer } from "react";
import FormCertificate from "./FormCertificate";
import { certificateReducer, declarationReducer } from "../Reducers";
import FormDeclaration from "./FormDeclaration";
const CreateForm = ({ setShowForm }) => {
    const [certificateState, certificateDispatch] = useReducer(
        certificateReducer,
        {
            certificate: "",
        }
    );

    // Declaration
    const [DeclarationState, DeclarationDispatch] = useReducer(
        declarationReducer,
        {
            Blank1: "",
            Blank2: "",
            Blank3: "",
            Blank4: "",
            Blank5: "",
            Blank6: "",
            Blank7: "",
        }
    );

    return (
        <div className="container">
            <FormCertificate
                dispatch={certificateDispatch}
                state={certificateState}
                show={false}
            />
            <FormDeclaration
                dispatch={DeclarationDispatch}
                state={DeclarationState}
                show={false}
            />

            <button
                className="btn btn-danger"
                onClick={() => {
                    setShowForm(false);
                }}
            >
                cancel
            </button>
        </div>
    );
};

export default CreateForm;
