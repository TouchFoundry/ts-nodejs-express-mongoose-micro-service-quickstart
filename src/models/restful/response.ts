/**
 * Created by lukejohnstone on 2017/01/18.
 */
export class Response {
    code: number;
    message: string;
    data: any = {};

    constructor(code: number, message: string, data: any) {
        this.code = code;
        this.message = message || this.message;
        this.data = data;
    }
}