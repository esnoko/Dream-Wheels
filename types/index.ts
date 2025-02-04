import { MouseEventHandler } from "react";
export interface ICustomButton {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}