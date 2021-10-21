import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div className="ml-96">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <button className="focus:ring" disabled="disabled">
                            Disabled
                        </button>
                        <div className="card-body font-mono text-base text-justify">
                            I'm an example component! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Dicta ab modi facere
                            placeat consequuntur temporibus est assumenda, autem
                            molestias similique, voluptas illo voluptatum
                            consequatur facilis ratione dolorem dignissimos
                            fugit ipsa? Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis quae voluptatibus ut ad
                            praesentium. Esse facilis aliquid ut, aliquam
                            quibusdam labore eius doloremque optio odio repellat
                            impedit, culpa, magnam corrupti.
                        </div>
                        1<p className="ordinal">st</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
