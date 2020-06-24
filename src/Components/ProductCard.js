import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  // const { name, price, id, image } = props.product;
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.images[0].imageUrl}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        >
          HI
        </div>
      </Link>
      <div className="p-3">
        <h3></h3>
      </div>
    </div>
  );
}

export default ProductCard;
