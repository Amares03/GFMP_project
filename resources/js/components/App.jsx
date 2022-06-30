import { Provider } from "react-redux";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

import Table from "./Table";
import store from "../redux/store/store";
// import CreateForm from "./Forms/CreateForm";
import FormControl from "./Forms/FormControl";

function App() {
    const [showForm, setShowForm] = useState(false);
    return (
        <Provider store={store}>
            <div className="container" style={{ padding: "0", margin: "0" }}>
                {/* components go here */}
                {showForm ? (
                    <Card
                        style={{
                            backgroundColor: "#F7F7F7",
                            color: "#9EB23B",
                        }}
                    >
                        <Card.Body>
                            <FormControl show={setShowForm} />
                        </Card.Body>
                    </Card>
                ) : (
                    <div className="col">
                        <Button
                            variant="light"
                            // size="xl"
                            // className="btn btn-light"
                            style={{
                                width: "240px",
                                height: "40px",
                                marginTop: "0",
                            }}
                            onClick={() => {
                                setShowForm(true);
                            }}
                        >
                            <span>{"ADD USER "}</span>
                            <FaPlus />
                        </Button>
                    </div>
                )}
                <Table />
            </div>
        </Provider>
    );
}

export default App;
