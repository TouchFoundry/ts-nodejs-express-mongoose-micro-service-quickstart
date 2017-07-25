/**
 * Created by Luke on 2017/06/01.
 */
import {Document} from "mongoose";

export interface IExample extends Document {
    exampleAttr1: string;
    exampleAttr2: string;
    exampleAttr3: string;
}