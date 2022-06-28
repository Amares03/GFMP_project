import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import FormCertificate from "../Forms/FormCertificate";
import { certificateReducer } from "../Reducers";

function CertificateForm({ data, url }) {
    const [state, dispatch] = useReducer(certificateReducer, {
        id: data.id,
        certificate: data.certificate,
    });

    return (
        <>
            <div className="modal-body">
                <FormCertificate
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
}

export default CertificateForm;
