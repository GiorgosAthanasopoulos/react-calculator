import React from "react";

import Button from "./Button";

export default function Buttons(): JSX.Element {
    return (
        <>
            <Button className={"digit"}>1</Button>
            <Button className={"digit"}>2</Button>
            <Button className={"digit"}>3</Button>
            <Button className={"operator"}>/</Button>
            <br/>

            <Button className={"digit"}>4</Button>
            <Button className={"digit"}>5</Button>
            <Button className={"digit"}>6</Button>
            <Button className={"operator"}>X</Button>
            <br/>

            <Button className={"digit"}>7</Button>
            <Button className={"digit"}>8</Button>
            <Button className={"digit"}>9</Button>
            <Button className={"operator"}>+</Button>
            <br/>

            <Button className={"digit"}>.</Button>
            <Button className={"digit"}>0</Button>
            <Button className={"equals"}>=</Button>
            <Button className={"operator"}>-</Button>
            <br/>

            <Button className={"text"}>Clear</Button>
        </>
    );
};