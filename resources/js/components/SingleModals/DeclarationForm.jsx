import React, { useReducer } from "react";
import { updateUsers } from "../Modals/UpdateModal";

const DeclarationForm = ({ data, url }) => {
    const reducer = (state, action) => {
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
    const [state, dispatch] = useReducer(reducer, {
        id: data.id,
        Blank1: data.Blank1,
        Blank2: data.Blank2,
        Blank3: data.Blank3,
        Blank4: data.Blank4,
        Blank5: data.Blank5,
        Blank6: data.Blank6,
        Blank7: data.Blank7,
    });

    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };
    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Update Declaration User{" "}
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
                <form className="form">
                    <div className="form-group">
                        <div className="row">Id:{" " + data.id}</div>
                        <div className="row">
                            Blank1:{" "}
                            <input
                                type="text"
                                id="Blank1"
                                className="form-control mb-3"
                                value={state.Blank1}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            Blank2:{" "}
                            <input
                                type="text"
                                id="Blank2"
                                className="form-control mb-3"
                                value={state.Blank2}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            Blank3:{" "}
                            <input
                                type="text"
                                id="Blank3"
                                className="form-control mb-3"
                                value={state.Blank3}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            Blank4:{" "}
                            <input
                                type="text"
                                id="Blank4"
                                className="form-control mb-3"
                                value={state.Blank4}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            Blank5:{" "}
                            <input
                                type="text"
                                id="Blank5"
                                className="form-control mb-3"
                                value={state.Blank5}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            Blank6:{" "}
                            <input
                                type="text"
                                id="Blank6"
                                className="form-control mb-3"
                                value={state.Blank6}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            Blank7:{" "}
                            <input
                                type="text"
                                id="Blank7"
                                className="form-control mb-3"
                                value={state.Blank7}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={() => {
                        updateUsers(state, url);
                    }}
                >
                    Yes
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
            </div>
        </>
    );
};

export default DeclarationForm;
