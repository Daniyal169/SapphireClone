import React from 'react'
import "./ProductBox.css"

function ProductBox({ product }) {
    return (
        <div className="productBox">
            <img src={product.img} alt={product.title} />
            <div className="productCont">
                <div className="proLeft">
                    <h1 className="productTitle">{product.title}</h1>
                    <h3 className="productSub">{product.subTitle}</h3>
                    <p className="price">{product.price}</p>
                </div>
                <button className="proBtn">Add to Bag</button>
            </div>
        </div>
    )
}

export default ProductBox