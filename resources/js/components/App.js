import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product";

function App() {
    return (
        <>
            <div className="container font-mono text-sm mt-2 ml-2">
                <div className="flex flex-row space-x-2 text-white">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
