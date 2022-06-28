import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import FormTypesOfProductPurchased from "../Forms/FormTypesOfProductPurchased";
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

    return (
        <>
            <div className="modal-body">
                <FormTypesOfProductPurchased
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default TypesOfProductPurchasedForm;
