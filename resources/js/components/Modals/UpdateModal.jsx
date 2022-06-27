import axios from "axios";
import React from "react";
import style from "../../../css/app.css";
import CertificateForm from "../SingleModals/CertificateForm";

const UpdateModal = ({ url, modalId, data }) => {
    return (
        <div
            className={"modal fade shaddow " + style.shaddow}
            id={"update" + url + "Modal" + modalId}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <CertificateForm modalId={modalId} url={url} data={data} />
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
