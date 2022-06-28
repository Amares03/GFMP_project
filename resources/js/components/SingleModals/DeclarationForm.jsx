import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import { declarationReducer } from "../Reducers";

const DeclarationForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(declarationReducer, {
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
            <FormButtons state={state} url={url} />
        </>
    );
};

export default DeclarationForm;
