import React from "react";
import { Formik, Field, useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { userInfoActions } from "../../redux/slices/userInfoSlice";
import axios from "axios";
import {
    DropdownButton,
    Dropdown,
    FloatingLabel,
    Form,
    InputGroup,
} from "react-bootstrap";
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

const FormControl = ({ show }) => {
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        // axios.post(`add/${url}/user`, state).then((response) => {});

        await axios.post("add/all/user", values);
        console.log(values);
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
                    nationality: "",
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
                    other_detail: "",
                }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        Certificate
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Certificate"
                                        name="certificate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.certificate}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        Declaration
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Blank1"
                                        name="Blank1"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.Blank1}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            {" "}
                                            <Form.Control
                                                type="text"
                                                placeholder="Blank2"
                                                name="Blank2"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Blank2}
                                            />
                                            <Form.Control
                                                type="text"
                                                placeholder="Blank3"
                                                name="Blank3"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Blank3}
                                            />
                                            <Form.Control
                                                type="text"
                                                placeholder="Blank4"
                                                name="Blank4"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Blank4}
                                            />
                                        </div>
                                        <div className="col">
                                            <Form.Control
                                                type="text"
                                                placeholder="Blank5"
                                                name="Blank5"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Blank5}
                                            />
                                            <Form.Control
                                                type="text"
                                                placeholder="Blank6"
                                                name="Blank6"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Blank6}
                                            />
                                            <Form.Control
                                                type="text"
                                                placeholder="Blank7"
                                                name="Blank7"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Blank7}
                                            />
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"For Office Use"}
                                    </Form.Label>
                                    <Form.Control
                                        placeholder="application"
                                        name="application"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.application}
                                    />
                                    <Form.Control
                                        placeholder="payment Period"
                                        name="payment_period"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.payment_period}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            {" "}
                                            <Form.Control
                                                type="number"
                                                placeholder="3 Months"
                                                name="months_3"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.months_3}
                                            />
                                            <Form.Control
                                                type="number"
                                                placeholder="6 Months"
                                                name="months_6"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.months_6}
                                            />
                                        </div>
                                        <div className="col">
                                            <Form.Control
                                                type="number"
                                                placeholder="Cash"
                                                name="cash"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.cash}
                                            />
                                            <Form.Control
                                                type="number"
                                                placeholder="Plot Number"
                                                name="plot_number"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.plot_number}
                                            />
                                        </div>
                                    </div>
                                    <Form.Control
                                        placeholder="other"
                                        name="Other"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.other}
                                    />
                                    <Form.Control
                                        placeholder="monthly_instalment"
                                        name="Monthly Instalment"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.monthly_instalment}
                                    />
                                    <Form.Control
                                        placeholder="authorized_signatory"
                                        name="Authorized Signatory"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.authorized_signatory}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Mode of payment"}
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Amount Of Initial Disposal"
                                        name="amount_of_initial_disposal"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={
                                            values.amount_of_initial_disposal
                                        }
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Nominated Beneficiaries"}
                                    </Form.Label>
                                    <Form.Control
                                        placeholder="Name"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            <Form.Control
                                                type="number"
                                                placeholder="Age"
                                                name="age"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.age}
                                            />
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                    <Form.Control
                                        placeholder="Relationship"
                                        name="relationship"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.relationship}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Types Of Product Purchased"}
                                    </Form.Label>
                                    <FloatingLabel label="Glen Forest Memorial Park">
                                        <Form.Control
                                            type="number"
                                            placeholder="Glen Forest Memorial Park"
                                            name="glen_forest_memorial_park"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={
                                                values.glen_forest_memorial_park
                                            }
                                        />
                                    </FloatingLabel>
                                    <div className="row">
                                        <div className="col">
                                            <FloatingLabel label="chemhute Park">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="chemhute_park"
                                                    name="chemhute_park"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.chemhute_park}
                                                />
                                            </FloatingLabel>
                                            <FloatingLabel label="Matidoda Park">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="matidoda_park"
                                                    name="matidoda_park"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.matidoda_park}
                                                />
                                            </FloatingLabel>
                                            <FloatingLabel label="Single Unit">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="single_unit"
                                                    name="single_unit"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.single_unit}
                                                />
                                            </FloatingLabel>
                                        </div>
                                        <div className="col">
                                            <FloatingLabel label="Double Unit">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="double_unit"
                                                    name="double_unit"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.double_unit}
                                                />
                                            </FloatingLabel>
                                            <FloatingLabel label="Triple Unit">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="triple_unit"
                                                    name="triple_unit"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.triple_unit}
                                                />
                                            </FloatingLabel>
                                            <FloatingLabel label="Family Close">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="family_close"
                                                    name="family_close"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.family_close}
                                                />
                                            </FloatingLabel>
                                        </div>
                                        <FloatingLabel label="Other Detail (please give details) ">
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                placeholder="other_detail"
                                                name="other_detail"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.other_detail}
                                            />
                                        </FloatingLabel>
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Terms And Conditions"}
                                    </Form.Label>
                                    <FloatingLabel label="Terms Table">
                                        <Form.Control
                                            as="textarea"
                                            rows={7}
                                            placeholder="terms_table"
                                            name="terms_table"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.terms_table}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Personal Details"}
                                    </Form.Label>
                                    <FloatingLabel label="Surname">
                                        <Form.Control
                                            placeholder="surname"
                                            name="surname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.surname}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="First Name">
                                        <Form.Control
                                            placeholder="first_name"
                                            name="first_name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.first_name}
                                        />
                                    </FloatingLabel>
                                    <InputGroup>
                                        <InputGroup.Text>Date</InputGroup.Text>
                                        <Form.Control
                                            type="date"
                                            placeholder="date"
                                            name="date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                        />
                                    </InputGroup>

                                    <label>{"Martial Status"}</label>
                                    <div className="row">
                                        <div className="col">
                                            <label>{"Single"}</label>
                                        </div>
                                        <div className="col">
                                            <Field
                                                type="radio"
                                                name="martial_status"
                                                value="Single"
                                            />
                                        </div>
                                        <div className="col">
                                            <label>{"Married"}</label>
                                        </div>
                                        <div className="col">
                                            <Field
                                                type="radio"
                                                name="martial_status"
                                                value="Married"
                                            />
                                        </div>
                                        <div className="col">
                                            <label>{"Divorced"}</label>
                                        </div>
                                        <div className="col">
                                            <Field
                                                type="radio"
                                                name="martial_status"
                                                value="Divorced"
                                            />
                                        </div>
                                        <div className="col">
                                            <label>Widowed</label>
                                        </div>
                                        <div className="col">
                                            <Field
                                                type="radio"
                                                name="martial_status"
                                                value="Widowed"
                                            />
                                        </div>
                                    </div>
                                    <FloatingLabel label="Name Of Spouse">
                                        <Form.Control
                                            placeholder="name_of_spouse"
                                            name="name_of_spouse"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name_of_spouse}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Nationality">
                                        <Form.Control
                                            placeholder="nationality"
                                            name="nationality"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nationality}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Physical Address">
                                        <Form.Control
                                            placeholder="physical_address"
                                            name="physical_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.physical_address}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Postal Address">
                                        <Form.Control
                                            placeholder="postal_address"
                                            name="postal_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.postal_address}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Employer">
                                        <Form.Control
                                            placeholder="employer"
                                            name="employer"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.employer}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Occupation">
                                        <Form.Control
                                            placeholder="occupation"
                                            name="occupation"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.occupation}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Tel No (Home)">
                                        <Form.Control
                                            placeholder="tel_no_home"
                                            name="tel_no_home"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.tel_no_home}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Cell">
                                        <Form.Control
                                            placeholder="cell"
                                            name="cell"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.cell}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Tel No (Business)">
                                        <Form.Control
                                            placeholder="tel_no_business"
                                            name="tel_no_business"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.tel_no_business}
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Email">
                                        <Form.Control
                                            placeholder="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </div>
                        </div>

                        {/* ***************************************************** */}

                        <button type="submit">Submit</button>
                        <button onClick={() => show(false)}>Cancel</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormControl;
