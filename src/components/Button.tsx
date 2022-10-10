import React from "react";

import "../stylesheets/Button.css";

export default function Button(props: any): JSX.Element {
    function onClick(): void {
        const display: HTMLDivElement = document.getElementById("display") as HTMLDivElement;
        switch (props.className) {
            case "text":
                display.innerText = "";
                break;
            case "digit":
            case "operator":
                if(["undefined", "Error", "Infinity"].indexOf(display.innerText) != -1) {
                    display.innerText = "";
                }

                display.innerText += props.children;
                break;
            case "equals":
                try {
                    // eslint-disable-next-line no-eval
                    display.innerText = eval(display.innerText);
                } catch (SyntaxError) {
                    display.innerText = "Error";
                };
                break;
        };
    };

    return (
      <>
          <div className={"button " + props.className} onClick={onClick}>
              {props.children}
          </div>
      </>
    );
};