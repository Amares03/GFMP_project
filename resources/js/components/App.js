import { Provider } from "react-redux";
import React from "react";

import Table from "./Table";
import store from "../redux/store/store";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <div className="row justify-content-center">
                    {/* components go here */}
                    <Table />
                </div>
            </div>
        </Provider>
    );
}

export default App;
