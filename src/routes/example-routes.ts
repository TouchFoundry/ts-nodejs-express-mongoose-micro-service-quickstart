import * as express from "express";
import {model} from "mongoose";

import {Promise} from "bluebird";

import {IExample} from "../interfaces";
import {Response} from "../models";
import {ExampleSchema} from "../schemas";


/**
 * Created by lukejohnstone on 2017/05/24.
 */

export class ExampleRoutes {
    private router: express.Router = express.Router();
    private winston;
    private baseUri: string = '/example';

    //common responses
    private exampleRes: Response = new Response(400, 'Example response', {
        error: 'Example'
    });

    constructor(winston) {
        this.winston = winston;

        this.initRoutes();
    }

    private initRoutes() {
        this.router.route(this.baseUri).get((req, res) => this.getExample(req, res));
        this.router.route(this.baseUri).post((req, res) => this.postExample(req, res));
        this.router.route(this.baseUri).put((req, res) => this.putExample(req, res));
    }

    private getExample(req: express.Request, res: express.Response) {
        let promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
            resolve(new Response(200, "Successful response", {
                success: true
            }));
        });

        this.completeRequest(promise, res);
    }

    private postExample(req: express.Request, res: express.Response) {
        let promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
            let ExampleModel = model('Example', ExampleSchema);
            let newExample = new ExampleModel({
                exampleAttr1: req.body.exampleAttr1,
                exampleAttr2: req.body.exampleAttr2,
                exampleAttr3: req.body.exampleAttr3
            });

            newExample.save().then((document: IExample) => {
                resolve(new Response(200, "Successfully added example item", {
                    newItem: document
                }));
            }).catch(error => reject(new Response(500, "Error saving example item", {
                error: error.toString()
            })));
        });

        this.completeRequest(promise, res);
    }

    private putExample(req: express.Request, res: express.Response) {
        let promise: Promise<Response> = new Promise<Response>((resolve, reject) => {
            let ExampleModel = model("Example", ExampleSchema);
            ExampleModel.update({_id: req.body._id}, {}).then(() => {
                resolve(new Response(200, "Successfully updated example item", {
                    updated: true
                }));
            }).catch(error => reject(new Response(500, "Unable to update example item", {
                error: error.toString()
            })));
        });

        this.completeRequest(promise, res);
    }

    /**
     * Simple helper function that wraps the resolving of a route's promise, and passed the result into the express.Response object, triggering the completion of the client's request
     * @param {Promise} promise the promise to be resolved
     * @param {express.Response} res the Express response object that should be interacted with
     * @version 1.0.0
     */
    private completeRequest(promise: Promise, res: express.Response) {
        promise.then(response => {
            res.status(response.code).send(response);
        }).catch(errorResponse => {
            res.status(errorResponse.code).send(errorResponse);
        });
    }

    public getRoutes(): express.Router {
        return this.router;
    }
}