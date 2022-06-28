import React from "react";

const FormDeclaration = ({ dispatch, state, show }) => {
    const onChange = (event) => {
        const newValue = event.target.value;
        const currentId = event.target.id;
        dispatch({ type: currentId, payload: newValue });
    };
    return (
        <form className="form">
            <div className="form-group">
                <div className="row">
                    {show ? (
                        <>
                            Id:{state.id} <br />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
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
    );
};

export default FormDeclaration;
