import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import { typesOfProductPurchasedReducer } from "../Reducers";

const TypesOfProductPurchasedForm = ({ data, url }) => {
    const [state, dispatch] = useReducer(typesOfProductPurchasedReducer, {
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
            <FormButtons state={state} url={url} />
        </>
    );
};

export default TypesOfProductPurchasedForm;
