import React, { useState } from "react";

function CertificateForm({ data }) {
    const [inptValue, setInputValue] = useState(data.certificate);

    const onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };
    return (
        <>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Update Certificate User{" "}
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
                        Id:{data.id} <br />
                        {/* <input
                    type="text"
                    id={data.id}
                    className="form-control mb-3"
                    value={data.id}
                    onChange={onChange}
                /> */}
                        Certificate:{" "}
                        <input
                            type="text"
                            id="certificate"
                            className="form-control mb-3"
                            value={inptValue}
                            onChange={onChange}
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={() => {
                        console.log("clicked");
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
}

export default CertificateForm;
