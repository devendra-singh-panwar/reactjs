import React from "react";

function Product(props)
{
  console.log(props.product);
  return (
    <div className="row">
      <div className="col-1">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary"> ₹{props.product.price}</span>
        </h2>
      </div>

      <div className="col-2">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button className="btn btn-primary" type="button">
            -
          </button>
          <button className="btn btn-primary" type="button">
            {props.product.quantity}
          </button>
          <button className="btn btn-primary" type="button" onClick={()=>props.incrementQuantity(props.index)}>
            +
          </button>
        </div>
      </div>
      <div className="col - 3 ">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
export default Product;
