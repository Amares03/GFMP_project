import axios from "axios";
import React from "react";
import style from "../../../css/app.css";
import CertificateForm from "../SingleModals/CertificateForm";
import DeclarationForm from "../SingleModals/DeclarationForm";
import ForOfficeUseForm from "../SingleModals/ForOfficeUseForm";

const UpdateModal = ({ url, modalId, data }) => {
    const getForms = () => {
        if (url === "certificate") {
            return <CertificateForm modalId={modalId} url={url} data={data} />;
        } else if (url === "declaration") {
            return <DeclarationForm modalId={modalId} url={url} data={data} />;
        } else if (url === "for_office_use") {
            return <ForOfficeUseForm modalId={modalId} url={url} data={data} />;
        }
    };
    return (
        <div
            className={"modal fade shaddow " + style.shaddow}
            id={"update" + url + "Modal" + modalId}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">{getForms()}</div>
            </div>
        </div>
    );
};

export default UpdateModal;
