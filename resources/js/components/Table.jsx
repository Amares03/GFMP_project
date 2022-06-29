import React, { Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateForm from "./Forms/CreateForm";
import FormControl from "./Forms/FormControl";
import CertificateTable from "./Tables/CertificateTable/CertificateTable";
import DeclarationTable from "./Tables/DeclarationTable/DeclarationTable";
import ForOfficeUse from "./Tables/ForOfficeUse/ForOfficeUse";
import ModeOfPayment from "./Tables/ModeOfPayment/ModeOfPayment";
import NominatedBeneficiaries from "./Tables/NominatedBeneficiaries/NominatedBeneficiaries";
import PersonalDetails from "./Tables/PersonalDetails/PersonalDetails";
import TermsAndConditions from "./Tables/TermsAndConditions/TermsAndConditions";
import TypesOfProductPurchased from "./Tables/TypesOfProductPurchased/TypesOfProductPurchased";

const Table = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            {showForm ? (
                // <CreateForm setShowForm={setShowForm} />
                <FormControl />
            ) : (
                <button
                    className="btn btn-info"
                    onClick={() => {
                        setShowForm(true);
                    }}
                >
                    Create User
                </button>
            )}
            <div className="container">
                <ToastContainer />

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        {/* <div className="card"> */}
                        <CertificateTable />
                        <DeclarationTable />
                        <ForOfficeUse />
                        <ModeOfPayment />
                        <NominatedBeneficiaries />
                        <PersonalDetails />
                        <TermsAndConditions />
                        <TypesOfProductPurchased />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
