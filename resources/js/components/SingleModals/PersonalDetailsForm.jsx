import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import { personalDetailsReducer } from "../Reducers";
const PersonalDetailsForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(personalDetailsReducer, {
        id: data.id,
        surname: data.surname,
        first_name: data.first_name,
        date: data.date,
        martial_status: data.martial_status,
        name_of_spouse: data.name_of_spouse,
        physical_address: data.physical_address,
        postal_address: data.postal_address,
        employer: data.employer,
        occupation: data.occupation,
        tel_no_home: data.tel_no_home,
        cell: data.cell,
        tel_no_business: data.tel_no_business,
        email: data.email,
    });
    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };
    return (
        <>
            <div className="modal-body">
                <form className="form">
                    <div className="form-group">
                        <div className="row">Id:{" " + data.id}</div>
                        <div className="row">
                            surname:{" "}
                            <input
                                type="text"
                                id="surname"
                                className="form-control mb-3"
                                value={state.surname}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            first_name:{" "}
                            <input
                                type="text"
                                id="first_name"
                                className="form-control mb-3"
                                value={state.first_name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            date:{" "}
                            <input
                                type="date"
                                id="date"
                                className="form-control mb-3"
                                value={state.date}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            martial_status:{" "}
                            <input
                                type="text"
                                id="martial_status"
                                className="form-control mb-3"
                                value={state.martial_status}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            name_of_spouse:{" "}
                            <input
                                type="text"
                                id="name_of_spouse"
                                className="form-control mb-3"
                                value={state.name_of_spouse}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            physical_address:{" "}
                            <input
                                type="text"
                                id="physical_address"
                                className="form-control mb-3"
                                value={state.physical_address}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            postal_address:{" "}
                            <input
                                type="text"
                                id="postal_address"
                                className="form-control mb-3"
                                value={state.postal_address}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            employer:{" "}
                            <input
                                type="text"
                                id="employer"
                                className="form-control mb-3"
                                value={state.employer}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            occupation:{" "}
                            <input
                                type="text"
                                id="occupation"
                                className="form-control mb-3"
                                value={state.occupation}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            tel_no_home:{" "}
                            <input
                                type="text"
                                id="tel_no_home"
                                className="form-control mb-3"
                                value={state.tel_no_home}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            cell:{" "}
                            <input
                                type="text"
                                id="cell"
                                className="form-control mb-3"
                                value={state.cell}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            tel_no_business:{" "}
                            <input
                                type="text"
                                id="tel_no_business"
                                className="form-control mb-3"
                                value={state.tel_no_business}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            email:{" "}
                            <input
                                type="text"
                                id="email"
                                className="form-control mb-3"
                                value={state.email}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default PersonalDetailsForm;
