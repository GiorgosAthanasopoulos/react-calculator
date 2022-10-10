import React from "react";

import Display from "./Display";
import Buttons from "./Buttons";

import "../stylesheets/Calculator.css";

export default function Calculator(): JSX.Element {
    return (
      <>
          <div id={"calculator"}>
              <Display/>
              <br/>
              <Buttons/>
          </div>
      </>
    );
};