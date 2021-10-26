import React from "react";

function Product(params) {
    return (
        <div className="product">
            <div className="bg-blue-500 px-4 py-2 rounded text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                iure illo possimus tenetur, modi ut! Consequatur dignissimos
                incidunt necessitatibus saepe in nemo! Doloribus recusandae
                animi laborum modi excepturi dicta facere.
                <button className="bg-green-900 px-2 rounded-sm block">
                    Buy
                </button>
            </div>
        </div>
    );
}

export default Product;
