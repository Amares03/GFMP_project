import React from "react";
import { Formik, Field, useFormikContext, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";

import axios from "axios";
import { FloatingLabel, Form, InputGroup, Button } from "react-bootstrap";
import { validate } from "../Validation";

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
    const redStyle = { color: "#E21515E0" };
    const handleSubmit = async (values) => {
        await axios.post("add/all/user", values).then(() => {
            toast("User Added Successfully");
            location.reload();
        });
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
                    cash: null,
                    months_3: null,
                    months_6: null,
                    other: "",
                    monthly_instalment: "",
                    authorized_signatory: "",
                    plot_number: null,
                    // modeOfPayment
                    amount_of_initial_disposal: null,
                    // nominatedBeneficiaries
                    name: "",
                    age: null,
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
                    glen_forest_memorial_park: null,
                    chemhute_park: null,
                    matidoda_park: null,
                    single_unit: null,
                    double_unit: null,
                    triple_unit: null,
                    family_close: null,
                    other_detail: "",
                }}
                validationSchema={validate}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, handleSubmit, handleBlur }) => (
                    <Form onSubmit={handleSubmit} style={{ color: "#1B2430" }}>
                        <div className="row">
                            <div className="col">
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        Certificate
                                    </Form.Label>
                                    <FloatingLabel label="Certificate">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Certificate"
                                            name="certificate"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.certificate}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="certificate"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        Declaration
                                    </Form.Label>
                                    <FloatingLabel label="Blank1">
                                        <Form.Control
                                            type="text"
                                            placeholder="Blank1"
                                            name="Blank1"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.Blank1}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="Blank1"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            {" "}
                                            <FloatingLabel label="Blank2">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Blank2"
                                                    name="Blank2"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Blank2}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="Blank2"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                            <FloatingLabel label="Blank3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Blank3"
                                                    name="Blank3"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Blank3}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="Blank3"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                            <FloatingLabel label="Blank4">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Blank4"
                                                    name="Blank4"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Blank4}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="Blank4"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="col">
                                            <FloatingLabel label="Blank5">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Blank5"
                                                    name="Blank5"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Blank5}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="Blank5"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                            <FloatingLabel label="Blank6">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Blank6"
                                                    name="Blank6"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Blank6}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="Blank6"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                            <FloatingLabel label="Blank7">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Blank7"
                                                    name="Blank7"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Blank7}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="Blank7"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
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
                                    <FloatingLabel label="application">
                                        <Form.Control
                                            placeholder="application"
                                            name="application"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.application}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="application"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="payment Period">
                                        <Form.Control
                                            placeholder="payment Period"
                                            name="payment_period"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.payment_period}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="payment_period"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            {" "}
                                            <FloatingLabel label="3 Months">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="3 Months"
                                                    name="months_3"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.months_3}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="months_3"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                            <FloatingLabel label="6 Months">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="6 Months"
                                                    name="months_6"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.months_6}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="months_6"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="col">
                                            <FloatingLabel label="Cash">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Cash"
                                                    name="cash"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.cash}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="cash"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                            <FloatingLabel label="Plot Number">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Plot Number"
                                                    name="plot_number"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.plot_number}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="plot_number"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <FloatingLabel label="Other">
                                        <Form.Control
                                            placeholder="other"
                                            name="other"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.other}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="other"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Monthly Instalment">
                                        <Form.Control
                                            placeholder="monthly_instalment"
                                            name="monthly_instalment"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.monthly_instalment}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="monthly_instalment"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Authorized Signatory">
                                        <Form.Control
                                            placeholder="authorized_signatory"
                                            name="authorized_signatory"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.authorized_signatory}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="authorized_signatory"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Mode of payment"}
                                    </Form.Label>
                                    <FloatingLabel label="Amount Of Initial Disposal">
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
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="amount_of_initial_disposal"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
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
                                    <ErrorMessage
                                        name="surname"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="First Name">
                                        <Form.Control
                                            placeholder="first_name"
                                            name="first_name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.first_name}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="first_name"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
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
                                    <ErrorMessage
                                        name="date"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
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
                                        <ErrorMessage
                                            name="martial_status"
                                            render={(msg) => (
                                                <div style={redStyle}>
                                                    {msg}
                                                </div>
                                            )}
                                        />
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
                                    <ErrorMessage
                                        name="name_of_spouse"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Nationality">
                                        <Form.Control
                                            placeholder="nationality"
                                            name="nationality"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nationality}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="nationality"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Physical Address">
                                        <Form.Control
                                            placeholder="physical_address"
                                            name="physical_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.physical_address}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="physical_address"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Postal Address">
                                        <Form.Control
                                            placeholder="postal_address"
                                            name="postal_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.postal_address}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="postal_address"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Employer">
                                        <Form.Control
                                            placeholder="employer"
                                            name="employer"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.employer}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="employer"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Occupation">
                                        <Form.Control
                                            placeholder="occupation"
                                            name="occupation"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.occupation}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="occupation"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Tel No (Home)">
                                        <Form.Control
                                            placeholder="tel_no_home"
                                            name="tel_no_home"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.tel_no_home}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="tel_no_home"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Cell">
                                        <Form.Control
                                            placeholder="cell"
                                            name="cell"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.cell}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="cell"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Tel No (Business)">
                                        <Form.Control
                                            placeholder="tel_no_business"
                                            name="tel_no_business"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.tel_no_business}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="tel_no_business"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <FloatingLabel label="Email">
                                        <Form.Control
                                            placeholder="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="email"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Nominated Beneficiaries"}
                                    </Form.Label>
                                    <FloatingLabel label="Name">
                                        <Form.Control
                                            placeholder="Name"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="name"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                    <div className="row">
                                        <div className="col">
                                            <FloatingLabel label="Age">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="Age"
                                                    name="age"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.age}
                                                />
                                            </FloatingLabel>
                                            <ErrorMessage
                                                name="age"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                    <FloatingLabel label="Relationship">
                                        <Form.Control
                                            placeholder="Relationship"
                                            name="relationship"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.relationship}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="relationship"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
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
                                    <ErrorMessage
                                        name="glen_forest_memorial_park"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
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
                                            <ErrorMessage
                                                name="chemhute_park"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
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
                                            <ErrorMessage
                                                name="matidoda_park"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
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
                                            <ErrorMessage
                                                name="single_unit"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
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
                                            <ErrorMessage
                                                name="double_unit"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
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
                                            <ErrorMessage
                                                name="triple_unit"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
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
                                            <ErrorMessage
                                                name="family_close"
                                                render={(msg) => (
                                                    <div style={redStyle}>
                                                        {msg}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                        <FloatingLabel label="Other Detail (please give details) ">
                                            <Form.Control
                                                as="textarea"
                                                // rows={4}
                                                placeholder="other_detail"
                                                name="other_detail"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.other_detail}
                                                style={{ height: "120px" }}
                                            />
                                        </FloatingLabel>
                                        <ErrorMessage
                                            name="other_detail"
                                            render={(msg) => (
                                                <div style={redStyle}>
                                                    {msg}
                                                </div>
                                            )}
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={{ color: "#E5E3C9" }}>
                                        {"Terms And Conditions"}
                                    </Form.Label>
                                    <FloatingLabel label="Terms Table">
                                        <Form.Control
                                            as="textarea"
                                            // rows={7}
                                            placeholder="terms_table"
                                            name="terms_table"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.terms_table}
                                            style={{ height: "140px" }}
                                        />
                                    </FloatingLabel>
                                    <ErrorMessage
                                        name="terms_table"
                                        render={(msg) => (
                                            <div style={redStyle}>{msg}</div>
                                        )}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">{"  "}</div>
                            <div className="col">
                                <div className="row">
                                    <div className="col"> </div>
                                    <div className="col">
                                        <div className="row">
                                            <Button
                                                type="submit"
                                                // variant="success"
                                                style={{
                                                    backgroundColor: "#9EB23A",
                                                    color: "#FCF9C6",
                                                    marginRight: "20px",
                                                    width: "120px",
                                                }}
                                                size="xl"
                                            >
                                                Submit
                                            </Button>

                                            <Button
                                                onClick={() => show(false)}
                                                size="xl"
                                                variant="danger"
                                                style={{
                                                    color: "#FCF9C6",
                                                    width: "120px",
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormControl;
