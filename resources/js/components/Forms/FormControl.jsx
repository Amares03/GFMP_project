import React from "react";
import { Formik, useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { userInfoActions } from "../../redux/slices/userInfoSlice";
import axios from "axios";
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

const FormControl = () => {
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        // axios.post(`add/${url}/user`, state).then((response) => {});

        await axios.post("add/all/user", values);
    };
    return (
        <div>
            <Formik
                initialValues={{
                    // certificate
                    certificate: "",
                    // declaration
                    Blank1: "",
                    Blank2: "",
                    Blank3: "",
                    Blank4: "",
                    Blank5: "",
                    Blank6: "",
                    Blank7: "",
                    // forOfficeUse
                    application: "",
                    payment_period: "",
                    cash: 0,
                    months_3: 0,
                    months_6: 0,
                    other: "",
                    monthly_instalment: "",
                    authorized_signatory: "",
                    plot_number: 0,
                    // modeOfPayment
                    amount_of_initial_disposal: 0,
                    // nominatedBeneficiaries
                    name: "",
                    age: 0,
                    relationship: "",
                    // personalDetails
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
                    // termsAndConditions
                    terms_table: "",
                    // typesOfProductPurchased
                    glen_forest_memorial_park: 0,
                    chemhute_park: 0,
                    matidoda_park: 0,
                    single_unit: 0,
                    double_unit: 0,
                    triple_unit: 0,
                    family_close: 0,
                    other_detail: 0,
                }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <input
                                    placeholder="Certificate"
                                    name="certificate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.certificate}
                                />
                            </div>
                            <div className="col">
                                <input
                                    placeholder="Blank1"
                                    name="Blank1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Blank1}
                                />
                                <input
                                    placeholder="Blank2"
                                    name="Blank2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Blank2}
                                />
                                <input
                                    placeholder="Blank3"
                                    name="Blank3"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Blank3}
                                />
                                <input
                                    placeholder="Blank4"
                                    name="Blank4"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Blank4}
                                />
                                <input
                                    placeholder="Blank5"
                                    name="Blank5"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Blank5}
                                />
                                <input
                                    placeholder="Blank6"
                                    name="Blank6"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Blank6}
                                />
                                <input
                                    placeholder="Blank7"
                                    name="Blank7"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Blank7}
                                />
                            </div>
                            <div className="col">
                                <input
                                    placeholder="application"
                                    name="application"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.application}
                                />
                                <input
                                    placeholder="payment_period"
                                    name="payment_period"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.payment_period}
                                />
                                <input
                                    type="number"
                                    placeholder="cash"
                                    name="cash"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cash}
                                />
                                <input
                                    type="number"
                                    placeholder="months_3"
                                    name="months_3"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.months_3}
                                />
                                <input
                                    type="number"
                                    placeholder="months_6"
                                    name="months_6"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.months_6}
                                />
                                <input
                                    placeholder="other"
                                    name="other"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.other}
                                />
                                <input
                                    placeholder="monthly_instalment"
                                    name="monthly_instalment"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.monthly_instalment}
                                />
                                <input
                                    placeholder="authorized_signatory"
                                    name="authorized_signatory"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.authorized_signatory}
                                />
                                <input
                                    type="number"
                                    placeholder="plot_number"
                                    name="plot_number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.plot_number}
                                />
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default FormControl;
