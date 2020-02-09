import React from "react";
import * as bs from "react-bootstrap";
import { Link } from "react-router-dom";
import PRODUCTS from "./products";

export default function LeftSide(props) {
  const categories = {};
  let count = 0;
  for (let p of Object.values(PRODUCTS)) {
    if (p.category in categories) {
      categories[p.category] += 1;
    } else {
      categories[p.category] = 1;
    }
    count++;
  }

  return (
    <bs.Container>
      <bs.Col className="col-main bg-secondary">
        <bs.Nav className="flex-column" aria-controls="basic-navbar-nav">
          <Link to="/" className="nav-link" style={{ color: 'red' }}>
            All Products ({count})
          </Link>
          {Object.entries(categories).map(([key, value]) => {
            return (
              <Link key={key} to={`/category/${key}`} className="nav-link" style={{ color: 'red' }}>
                {`${key} (${value})`}
              </Link>
            );
          })}
        </bs.Nav>
      </bs.Col>
    </bs.Container>
  );
}
