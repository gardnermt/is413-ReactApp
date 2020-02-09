import React, { useState } from "react";
import * as bs from "react-bootstrap";
import PRODUCTS from "./products";
import { useParams } from "react-router-dom";

export default function Details(props) {
  const { productId } = useParams();
  const product = PRODUCTS[productId];

  let [state, setState] = useState("-1");

  if (product == null) {
    return <h1>Aliens have invaded! Or, product not found.</h1>;
  } else {
    return (
      <bs.Container>
        <bs.Row>
          <bs.Col style={{ float: "left" }}>
            <br />
            <h1>{product.name}</h1>
            <br />
            <h5>${product.price}</h5>
            <br />
            <p>{product.description}</p>
          </bs.Col>
          <bs.Col style={{ float: "right" }}>
            <img
              src={`/images/products/${product.filename}${state}.png`}
              alt=""
              height='300px'
              width='300px'
            />{" "}
            <br></br>
            <img
              onMouseOver={() => setState("-1")}
              onMouseLeave={() => setState("-1")}
              thumbnail
              height='30px'
              width="30px"
              src={`/images/products/${product.filename}-1.png`}
              alt=""
            />
            <img
              onMouseOver={() => setState("-2")}
              onMouseLeave={() => setState("-1")}
              thumbnail
              height='30px'
              width="30px"
              src={`/images/products/${product.filename}-2.png`}
              alt=""
            />
            <img
              onMouseOver={() => setState("-3")}
              onMouseLeave={() => setState("-1")}
              thumbnail
              height='30px'
              width="30px"
              src={`/images/products/${product.filename}-3.png`}
              alt=""
            />
            <img
              onMouseOver={() => setState("-4")}
              onMouseLeave={() => setState("-1")}
              thumbnail
              height='30px'
              width="30px"
              src={`/images/products/${product.filename}-4.png`}
              alt=""
            />
          </bs.Col>
        </bs.Row>
      </bs.Container>
    );
  }
}
