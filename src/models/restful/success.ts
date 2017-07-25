import {Response} from "./response";
/**
 * Created by lukejohnstone on 2017/01/18.
 */
export class SuccessResponse extends Response {
    code: number = 200;
    message: string = "Success";
}
