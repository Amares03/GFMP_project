import axios from "axios";
import React from "react";
import style from "../../../css/app.css";
import CertificateForm from "../SingleModals/CertificateForm";
import DeclarationForm from "../SingleModals/DeclarationForm";
import ForOfficeUseForm from "../SingleModals/ForOfficeUseForm";
import ModeOfPaymentForm from "../SingleModals/ModeOfPaymentForm";
import NominatedBeneficiariesForm from "../SingleModals/NominatedBeneficiariesForm";
import PersonalDetailsForm from "../SingleModals/PersonalDetailsForm";
import TermsAndConditionsForm from "../SingleModals/TermsAndConditionsForm";
import TypesOfProductPurchasedForm from "../SingleModals/TypesOfProductPurchasedForm";

export const updateUsers = (state, url) => {
    axios.post(`update/${url}/user`, state).then((response) => {});
};
const UpdateModal = ({ url, modalId, data }) => {
    const getForms = () => {
        if (url === "certificate") {
            return <CertificateForm modalId={modalId} url={url} data={data} />;
        } else if (url === "declaration") {
            return <DeclarationForm modalId={modalId} url={url} data={data} />;
        } else if (url === "for_office_use") {
            return <ForOfficeUseForm modalId={modalId} url={url} data={data} />;
        } else if (url === "mode_of_payment") {
            return (
                <ModeOfPaymentForm modalId={modalId} url={url} data={data} />
            );
        } else if (url === "nominated_beneficiaries") {
            return (
                <NominatedBeneficiariesForm
                    modalId={modalId}
                    url={url}
                    data={data}
                />
            );
        } else if (url === "personal_details") {
            return (
                <PersonalDetailsForm modalId={modalId} url={url} data={data} />
            );
        } else if (url === "terms_and_conditions") {
            return (
                <TermsAndConditionsForm
                    modalId={modalId}
                    url={url}
                    data={data}
                />
            );
        } else if (url === "types_of_product_purchased") {
            return (
                <TypesOfProductPurchasedForm
                    modalId={modalId}
                    url={url}
                    data={data}
                />
            );
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
