import * as Yup from "yup";

export const validate = Yup.object({
    // certificate
    certificate: Yup.string().required("Required"),
    // declaration
    Blank1: Yup.string().required("Required"),
    Blank2: Yup.string().required("Required"),
    Blank3: Yup.string().required("Required"),
    Blank4: Yup.string().required("Required"),
    Blank5: Yup.string().required("Required"),
    Blank6: Yup.string().required("Required"),
    Blank7: Yup.string().required("Required"),
    // forOfficeUse
    application: Yup.string().required("Required"),
    payment_period: Yup.string().required("Required"),
    cash: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    months_3: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    months_6: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    other: Yup.string().required("Required"),
    monthly_instalment: Yup.string().required("Required"),
    authorized_signatory: Yup.string().required("Required"),
    plot_number: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    // modeOfPayment
    amount_of_initial_disposal: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    // nominatedBeneficiaries
    name: Yup.string().required("Required"),
    age: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    relationship: Yup.string().required("Required"),
    // personalDetails
    surname: Yup.string().required("Required"),
    first_name: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    martial_status: Yup.string().required("Required"),
    name_of_spouse: Yup.string().required("Required"),
    nationality: Yup.string().required("Required"),
    physical_address: Yup.string().required("Required"),
    postal_address: Yup.string().required("Required"),
    employer: Yup.string().required("Required"),
    occupation: Yup.string().required("Required"),
    tel_no_home: Yup.string().required("Required"),
    cell: Yup.string().required("Required"),
    tel_no_business: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    // termsAndConditions
    terms_table: Yup.string().required("Required"),
    // typesOfProductPurchased
    glen_forest_memorial_park: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    chemhute_park: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    matidoda_park: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    single_unit: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    double_unit: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    triple_unit: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    family_close: Yup.number("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
    other_detail: Yup.string("must be Number")
        .typeError("Amount must be a number")
        .required("Required"),
});
