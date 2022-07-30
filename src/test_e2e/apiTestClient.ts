const request = require('supertest'); /* eslint @typescript-eslint/no-var-requires: "off" */
import app from '../rest/app';

type Method = MethodNoBody | MethodWithBody
type MethodNoBody = "get" | "delete"
type MethodWithBody = "post" | "put" | "patch"
//this request is inspired by the axios requests: https://axios-http.com/docs/api_intro
type RequestNoBody = {
    method: MethodNoBody,
    url: string
};

type RequestWithBody = {
    method: RequestWithBody,
    url: string
};



type Request = RequestNoBody | RequestWithBody


export { Request }
export default (req: Request,): any => {
    const m: string = `${req.method}`
    return request(app)[m](req.url).set('Accept', 'application/json');
}
