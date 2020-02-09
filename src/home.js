import React from "react";
import * as bs from "react-bootstrap";
import PRODUCTS from "./products";
import Card from "./product-card";
import { useRouteMatch } from "react-router-dom";

function Home(props) {
  let arrProducts = Object.values(PRODUCTS);
  const match = useRouteMatch().params.catName;
  console.log("match", match);
  if (match) {
    arrProducts = arrProducts.filter(product => {
      return product.category === match;
    });
    return (
      <bs.Container fluid>
        <bs.Row className="justify-content-md-center">
          {arrProducts.map(product => (
            <bs.Col md="3" key={product.id}>
              <Card product={product} />
            </bs.Col>
          ))}
        </bs.Row>
      </bs.Container>
    );
  } else {
    return (
      <bs.Container fluid>
        <bs.Row className="justify-content-md-center">
          {Object.values(PRODUCTS).map(product => (
            <bs.Col md="3" key={product.id}>
              <Card product={product} />
            </bs.Col>
          ))}
        </bs.Row>
      </bs.Container>
    );
  }
}

export default Home;
