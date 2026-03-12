import { UnknownAction } from "@reduxjs/toolkit";

export interface IAction<T extends string> extends UnknownAction {
    type: T
}

export function getActionByType<T extends string>(type: T): IAction<T> {
    return {
        type,
    }
}
