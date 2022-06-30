import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CertificateTable from "./Tables/CertificateTable/CertificateTable";
import DeclarationTable from "./Tables/DeclarationTable/DeclarationTable";
import ForOfficeUse from "./Tables/ForOfficeUse/ForOfficeUse";
import ModeOfPayment from "./Tables/ModeOfPayment/ModeOfPayment";
import NominatedBeneficiaries from "./Tables/NominatedBeneficiaries/NominatedBeneficiaries";
import PersonalDetails from "./Tables/PersonalDetails/PersonalDetails";
import TermsAndConditions from "./Tables/TermsAndConditions/TermsAndConditions";
import TypesOfProductPurchased from "./Tables/TypesOfProductPurchased/TypesOfProductPurchased";

const Table = () => {
    return (
        <>
            <div className="container">
                <ToastContainer />
                <CertificateTable />
                <DeclarationTable />
                <ForOfficeUse />
                <ModeOfPayment />
                <NominatedBeneficiaries />
                <PersonalDetails />
                <TermsAndConditions />
                <TypesOfProductPurchased />
            </div>
        </>
    );
};

export default Table;
