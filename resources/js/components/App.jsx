import { Provider } from "react-redux";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaUserPlus, FaTrash } from "react-icons/fa";

import Table from "./Table";
import store from "../redux/store/store";
// import CreateForm from "./Forms/CreateForm";
import FormControl from "./Forms/FormControl";

function App() {
    const [showForm, setShowForm] = useState(false);
    return (
        <Provider store={store}>
            <div className="container">
                <div className="row justify-content-center">
                    {/* components go here */}
                    {showForm ? (
                        // <CreateForm setShowForm={setShowForm} />
                        <Card
                            style={{
                                backgroundColor: "#F4FCD9",
                                color: "#9EB23B",
                            }}
                        >
                            <Card.Body>
                                <FormControl show={setShowForm} />
                            </Card.Body>
                        </Card>
                    ) : (
                        <div className="col">
                            <span>ADD USER </span>
                            <Button
                                variant="light"
                                size="md"
                                // className="btn btn-light"
                                onClick={() => {
                                    setShowForm(true);
                                }}
                            >
                                <FaUserPlus />
                            </Button>
                        </div>
                    )}
                    <Table />
                </div>
            </div>
        </Provider>
    );
}

export default App;
