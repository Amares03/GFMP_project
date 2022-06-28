import React, { useReducer } from "react";
import FormButtons from "../FormButtons";
import { declarationReducer } from "../Reducers";
import FormDeclaration from "../Forms/FormDeclaration";

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

    return (
        <>
            <div className="modal-body">
                <FormDeclaration
                    dispatch={dispatch}
                    state={state}
                    show={true}
                />
            </div>
            <FormButtons state={state} url={url} />
        </>
    );
};

export default DeclarationForm;
