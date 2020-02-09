import React from "react";
import * as bs from "react-bootstrap";
import PRODUCTS from "./products";

function About(props) {
  return (
    <bs.Container fluid className="p-">
      <bs.Row noGutters style={{ padding: "6rem 0" }}>
        <bs.Col>
          {Object.values(PRODUCTS).filt}
          <div className="text-center mt-5">
            {/* <img src= alt= className='rounded-circle shadow-lg' /> */}
          </div>

          <h1 className="text-center mt-5">A little about us</h1>
          <p>
            Minim dolor fugiat velit minim mollit fugiat esse do. Dolor laborum
            cupidatat esse qui ea nostrud tempor. Tempor veniam sit proident
            laborum mollit Lorem deserunt. Voluptate deserunt ad eu elit elit id
            nostrud anim exercitation amet Lorem incididunt anim. Sint nulla
            tempor sunt consectetur cillum ea deserunt exercitation irure irure
            reprehenderit tempor. Sint laborum qui est deserunt dolore
            exercitation elit nisi et. Incididunt ad laboris anim sit dolore.
            Aute velit ullamco occaecat officia proident cillum ad ex minim sunt
            ipsum eu. Ea nostrud adipisicing nisi cillum id pariatur. Commodo
            enim ullamco minim veniam ut enim eiusmod adipisicing est. Id ad est
            occaecat minim fugiat dolore esse enim sint in in reprehenderit.
            Dolor nulla laboris eiusmod eiusmod exercitation aliquip eiusmod
            Lorem tempor laborum ea est.
          </p>
        </bs.Col>
      </bs.Row>
    </bs.Container>
  );
}

export default About;
