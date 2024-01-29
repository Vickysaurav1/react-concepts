import React from "react";
import { firstName, lastName } from "./App";

function ComC() {
  return (
    <firstName.Consumer>
      {(fname) => {
        return (
          <lastName.Consumer>
            {(lname) => {
              return (
                <div>
                  My Name is {fname} {lname}
                </div>
              );
            }}
          </lastName.Consumer>
        );
      }}
    </firstName.Consumer>
  );
}

export default ComC;
