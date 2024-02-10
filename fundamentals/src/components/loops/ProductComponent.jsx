import React from "react";
import products from "../../mock/data/products";
import "./ProductStyle.css";

const ProductComponent = (props) => {
    const trTd = products.map(p => {
        return (
            <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>$ {p.value}</td>
            </tr>
        );
    });
    return (
        <table className="ProductComponent">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>value</th>
                </tr>
            </thead>
            <tbody>
                {trTd}
            </tbody>
        </table>
    );
};

export default ProductComponent;
