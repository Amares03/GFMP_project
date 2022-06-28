export const certificateReducer = (state, action) => {
    switch (action.type) {
        case "certificate":
            return { ...state, certificate: action.payload };
        default:
            return { state };
    }
};

export const declarationReducer = (state, action) => {
    switch (action.type) {
        case "Blank1":
            return { ...state, Blank1: action.payload };
        case "Blank2":
            return { ...state, Blank2: action.payload };
        case "Blank3":
            return { ...state, Blank3: action.payload };
        case "Blank4":
            return { ...state, Blank4: action.payload };
        case "Blank5":
            return { ...state, Blank5: action.payload };
        case "Blank6":
            return { ...state, Blank6: action.payload };
        case "Blank7":
            return { ...state, Blank7: action.payload };
        default:
            return { state };
    }
};

export const forOfficeUseReducer = (state, action) => {
    switch (action.type) {
        case "application":
            return { ...state, application: action.payload };
        case "payment_period":
            return { ...state, payment_period: action.payload };
        case "cash":
            return { ...state, cash: action.payload };
        case "months_3":
            return { ...state, months_3: action.payload };
        case "months_6":
            return { ...state, months_6: action.payload };
        case "other":
            return { ...state, other: action.payload };
        case "monthly_instalment":
            return { ...state, monthly_instalment: action.payload };
        case "authorized_signatory":
            return { ...state, authorized_signatory: action.payload };
        case "plot_number":
            return { ...state, plot_number: action.payload };
        default:
            return { state };
    }
};

export const modeOfPaymentReducer = (state, action) => {
    switch (action.type) {
        case "months_3":
            return { ...state, months_3: action.payload };
        case "months_6":
            return { ...state, months_6: action.payload };
        case "amount_of_initial_disposal":
            return { ...state, amount_of_initial_disposal: action.payload };
        default:
            return { state };
    }
};

export const nominatedBeneficiariesReducer = (state, action) => {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload };
        case "age":
            return { ...state, age: action.payload };
        case "relationship":
            return {
                ...state,
                relationship: action.payload,
            };
        default:
            return { state };
    }
};

export const personalDetailsReducer = (state, action) => {
    switch (action.type) {
        case "surname":
            return { ...state, surname: action.payload };
        case "first_name":
            return { ...state, first_name: action.payload };
        case "date":
            return { ...state, date: action.payload };
        case "martial_status":
            return { ...state, martial_status: action.payload };
        case "name_of_spouse":
            return { ...state, name_of_spouse: action.payload };
        case "physical_address":
            return { ...state, physical_address: action.payload };
        case "postal_address":
            return { ...state, postal_address: action.payload };
        case "employer":
            return { ...state, employer: action.payload };
        case "occupation":
            return { ...state, occupation: action.payload };
        case "tel_no_home":
            return { ...state, tel_no_home: action.payload };
        case "cell":
            return { ...state, cell: action.payload };
        case "tel_no_business":
            return { ...state, tel_no_business: action.payload };
        case "email":
            return { ...state, email: action.payload };
        default:
            return { state };
    }
};

export const termsAndConditionsReducer = (state, action) => {
    switch (action.type) {
        case "terms_table":
            return { ...state, terms_table: action.payload };
        default:
            return { state };
    }
};

export const typesOfProductPurchasedReducer = (state, action) => {
    switch (action.type) {
        case "glen_forest_memorial_park":
            return { ...state, glen_forest_memorial_park: action.payload };
        case "chemhute_park":
            return { ...state, chemhute_park: action.payload };
        case "matidoda_park":
            return { ...state, matidoda_park: action.payload };
        case "single_unit":
            return { ...state, single_unit: action.payload };
        case "double_unit":
            return { ...state, double_unit: action.payload };
        case "triple_unit":
            return { ...state, triple_unit: action.payload };
        case "family_close":
            return { ...state, family_close: action.payload };
        case "other_detail":
            return { ...state, other_detail: action.payload };

        default:
            return { state };
    }
};
