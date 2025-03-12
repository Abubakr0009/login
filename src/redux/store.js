import {createStore} from "redux"
import {counterReaducer} from "./reduser"

export const store = createStore(counterReaducer)