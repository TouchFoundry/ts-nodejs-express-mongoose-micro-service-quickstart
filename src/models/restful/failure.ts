import {Response} from "./response";
/**
 * Created by lukejohnstone on 2017/01/18.
 */
export class FailureResponse extends Response{
    code: number = 500;
    message: string = "Internal Server Error";
}