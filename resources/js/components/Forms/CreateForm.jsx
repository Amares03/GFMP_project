import React, { useReducer, useState } from "react";
import FormCertificate from "./FormCertificate";
import FormForOfficeUse from "./FormForOfficeUse";
import FormModeOfPayment from "./FormModeOfPayment";
import FormNominatedBeneficiaries from "./FormNominatedBeneficiaries";
import FormPersonalDetails from "./FormPersonalDetails";
import FormTermsAndConditions from "./FormTermsAndConditions";
import FormTypesOfProductPurchased from "./FormTypesOfProductPurchased";
import {
    certificateReducer,
    declarationReducer,
    forOfficeUseReducer,
    modeOfPaymentReducer,
    nominatedBeneficiariesReducer,
    personalDetailsReducer,
    termsAndConditionsReducer,
    typesOfProductPurchasedReducer,
} from "../Reducers";
import FormDeclaration from "./FormDeclaration";

function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split("");
    var ddChars = dd.split("");

    return (
        yyyy +
        "-" +
        (mmChars[1] ? mm : "0" + mmChars[0]) +
        "-" +
        (ddChars[1] ? dd : "0" + ddChars[0])
    );
}

const CreateForm = ({ setShowForm }) => {
    const addUsers = (state, url) => {
        // axios.post(`add/${url}/user`, state).then((response) => {});
        console.log("ADD CALLED" + state + "  " + url);
    };
    // certificate
    const [certificateState, certificateDispatch] = useReducer(
        certificateReducer,
        {
            certificate: "",
        }
    );

    // declaration
    const [declarationState, declarationDispatch] = useReducer(
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
    // forOfficeUse
    const [forOfficeUseState, forOfficeUseDispatch] = useReducer(
        forOfficeUseReducer,
        {
            application: "",
            payment_period: "",
            cash: 0,
            months_3: 0,
            months_6: 0,
            other: "",
            monthly_instalment: "",
            authorized_signatory: "",
            plot_number: 0,
        }
    );

    // modeOfPayment
    const [modeOfPaymentState, modeOfPaymentDispatch] = useReducer(
        modeOfPaymentReducer,
        {
            months_3: 0,
            months_6: 0,
            amount_of_initial_disposal: 0,
        }
    );
    // nominatedBeneficiaries
    const [nominatedBeneficiariesState, nominatedBeneficiariesDispatch] =
        useReducer(nominatedBeneficiariesReducer, {
            name: "",
            age: 0,
            relationship: "",
        });

    // personalDetails
    const [personalDetailsState, personalDetailsDispatch] = useReducer(
        personalDetailsReducer,
        {
            surname: "",
            first_name: "",
            date: convertDate(new Date()),
            martial_status: "",
            name_of_spouse: "",
            physical_address: "",
            postal_address: "",
            employer: "",
            occupation: "",
            tel_no_home: "",
            cell: "",
            tel_no_business: "",
            email: "",
        }
    );

    // termsAndConditions
    const [termsAndConditionsState, termsAndConditionsDispatch] = useReducer(
        termsAndConditionsReducer,
        {
            terms_table: "",
        }
    );

    // typesOfProductPurchased
    const [typesOfProductPurchasedState, typesOfProductPurchasedDispatch] =
        useReducer(typesOfProductPurchasedReducer, {
            glen_forest_memorial_park: 0,
            chemhute_park: 0,
            matidoda_park: 0,
            single_unit: 0,
            double_unit: 0,
            triple_unit: 0,
            family_close: 0,
            other_detail: 0,
        });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {/* <FormCertificate
                        dispatch={certificateDispatch}
                        state={certificateState}
                        show={false}
                        add={addUsers}
                    /> */}
                </div>
                <div className="col">
                    <FormDeclaration
                        dispatch={declarationDispatch}
                        state={declarationState}
                        show={false}
                    />
                </div>
                <div className="col">
                    <FormForOfficeUse
                        dispatch={forOfficeUseDispatch}
                        state={forOfficeUseState}
                        show={false}
                    />
                </div>
                <div className="col">
                    <FormModeOfPayment
                        dispatch={modeOfPaymentDispatch}
                        state={modeOfPaymentState}
                        show={false}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <FormNominatedBeneficiaries
                        dispatch={nominatedBeneficiariesDispatch}
                        state={nominatedBeneficiariesState}
                        show={false}
                    />
                </div>
                <div className="col">
                    <FormPersonalDetails
                        dispatch={personalDetailsDispatch}
                        state={personalDetailsState}
                        show={false}
                    />
                </div>
                <div className="col">
                    <FormTermsAndConditions
                        dispatch={termsAndConditionsDispatch}
                        state={termsAndConditionsState}
                        show={false}
                    />
                </div>
                <div className="col">
                    <FormTypesOfProductPurchased
                        dispatch={typesOfProductPurchasedDispatch}
                        state={typesOfProductPurchasedState}
                        show={false}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            setShowForm(false);
                        }}
                    >
                        cancel
                    </button>
                </div>
                <div className="col">
                    <button
                        className="btn btn-info"
                        onClick={() => {
                            addUsers(certificateState, "certificate");
                        }}
                    >
                        Submit
                    </button>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default CreateForm;
