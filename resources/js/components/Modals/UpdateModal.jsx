import React from "react";

function UpdateModal() {
    return (
        <div
            className="modal fade"
            id={"updateModal" + this.props.modalId}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Employee Details
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
                                <input
                                    type="text"
                                    id="employeeName"
                                    className="form-control mb-3"
                                    onChange={this.inputEmployeeName}
                                    value={this.state.employeeName ?? ""}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="employeeSalary"
                                    className="form-control mb-3"
                                    onChange={this.inputEmployeeSalary}
                                    value={this.state.employeeSalary ?? ""}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input
                            type="submit"
                            className="btn btn-info"
                            value="Update"
                            onClick={this.updateEmployeeData}
                        />
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateModal;
