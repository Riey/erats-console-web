import {EraWebConsole} from "../src";
import {ConsoleLineAlignment, InputRequestType} from "erats";
import "babel-polyfill";

window.addEventListener("load", async () => {
    const inputBtn = document.getElementById("era-input-btn");

    const console = new EraWebConsole(
        document.getElementById("era-console"),
        document.getElementById("era-input") as HTMLInputElement,
        c => {
            inputBtn.style.color = c;
        },
        c => {
            document.documentElement.style.backgroundColor = c;
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