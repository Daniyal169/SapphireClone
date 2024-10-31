import React from 'react'
import { women } from "../../db/Data"
import ProductBox from '../ProductBox/ProductBox.jsx'
import "./AllProducts.css"

function AllProducts({ products }) {
    return (
        <div className="allProducts">
            {products.map((product, index) => (
                <ProductBox key={index} product={product} />
            ))}

        </div>
    )
}

export default AllProducts