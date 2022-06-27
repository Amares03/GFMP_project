import React, { useReducer } from "react";
import { updateUsers } from "../Modals/UpdateModal";

const TypesOfProductPurchasedForm = ({ data, url }) => {
    const reducer = (state, action) => {
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

    const [state, dispatch] = useReducer(reducer, {
        id: data.id,
        glen_forest_memorial_park: data.glen_forest_memorial_park,
        chemhute_park: data.chemhute_park,
        matidoda_park: data.matidoda_park,
        single_unit: data.single_unit,
        double_unit: data.double_unit,
        triple_unit: data.triple_unit,
        family_close: data.family_close,
        other_detail: data.other_detail,
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
                    Update Terms And Conditions User{" "}
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
                            glen_forest_memorial_park:{" "}
                            <input
                                type="number"
                                id="glen_forest_memorial_park"
                                className="form-control mb-3"
                                value={state.glen_forest_memorial_park}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            chemhute_park:{" "}
                            <input
                                type="number"
                                id="chemhute_park"
                                className="form-control mb-3"
                                value={state.chemhute_park}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            matidoda_park:{" "}
                            <input
                                type="number"
                                id="matidoda_park"
                                className="form-control mb-3"
                                value={state.matidoda_park}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            single_unit:{" "}
                            <input
                                type="text"
                                id="single_unit"
                                className="form-control mb-3"
                                value={state.single_unit}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            double_unit:{" "}
                            <input
                                type="number"
                                id="double_unit"
                                className="form-control mb-3"
                                value={state.double_unit}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            triple_unit:{" "}
                            <input
                                type="number"
                                id="triple_unit"
                                className="form-control mb-3"
                                value={state.triple_unit}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            family_close:{" "}
                            <input
                                type="number"
                                id="family_close"
                                className="form-control mb-3"
                                value={state.family_close}
                                onChange={onChange}
                            />
                        </div>
                        <div className="row">
                            other_detail:{" "}
                            <input
                                type="text"
                                id="other_detail"
                                className="form-control mb-3"
                                value={state.other_detail}
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

export default TypesOfProductPurchasedForm;
