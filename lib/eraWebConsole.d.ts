import { ConsoleLineAlignment, EraConsole, InputRequest, InputResponse } from "erats";
export declare enum InputRoute {
    Normal = 0,
    EnterKey = 1
}
export declare type OnColorChanged = (string: any) => void;
export declare class EraWebConsole implements EraConsole {
    color: string;
    bgColor: string;
    hlColor: string;
    fontFamily: string;
    fontSize: string;
    fontBold: boolean;
    fontItalic: boolean;
    alignment: ConsoleLineAlignment;
    private readonly parent;
    private lastLine;
    private _inputReq;
    private _inputRes;
    private readonly _inputElem;
    private readonly onSetHlColor;
    private readonly onSetColor;
    private readonly onSetBgColor;
    constructor(parent: HTMLElement, inputElem: HTMLInputElement, onSetColor?: OnColorChanged, onSetBgColor?: OnColorChanged, onSetHlColor?: OnColorChanged);
    sendInputByInputElem(route: InputRoute): void;
    private updateInputElem;
    private makePlainTextElem;
    private makeButtonTextElem;
    onEnterResponse(route: InputRoute, res: InputResponse): void;
    newLine(): void;
    print(text: string): void;
    printBtn(text: string, res: InputResponse): void;
    printLine(text: string): void;
    drawLine(): void;
    wait(req: InputRequest): Promise<InputResponse>;
    setLineAlignment(alignment: ConsoleLineAlignment): void;
    getLineAlignment(): ConsoleLineAlignment;
    setBgColor(color: any): void;
    getBgColor(): string;
    setColor(color: string): void;
    getColor(): string;
    setHlColor(color: string): void;
    getHlColor(): string;
}
