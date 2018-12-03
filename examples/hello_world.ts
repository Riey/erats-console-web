import {EraWebConsole, InputRoute} from "../src";
import {ConsoleLineAlignment, InputRequestType} from "erats";
import "babel-polyfill";

// @ts-ignore
window.addEventListener("load", async () => {
    const inputBtn = document.getElementById("era-input-btn");
    const inputElem = document.getElementById("era-input") as HTMLInputElement;

    const console = new EraWebConsole(
        document.getElementById("era-console"),
        inputElem,
        c => {
            inputBtn.style.color = c;
            inputElem.style.color = c;
        },
        c => {
            document.documentElement.style.backgroundColor = c;
        });

    inputBtn.addEventListener("click", () => {
       console.sendInputByInputElem(InputRoute.EnterKey);
    });

    console.setBgColor("black");
    console.setColor("white");
    console.setHlColor("yellow");

    console.fontSize = "32px";
    console.print("Hello, world!");
    console.setLineAlignment(ConsoleLineAlignment.Center);
    console.newLine();

    const input = await console.wait({
        type: InputRequestType.Int,
        data: null,
        expire: null,
    });

    console.printLine(`Input: ${input}`);
});