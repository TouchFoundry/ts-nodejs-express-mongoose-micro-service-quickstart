/**
 * Created by Luke on 2017/06/01.
 */
import {Schema} from "mongoose";
import mongoose = require('mongoose');
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

mongoose.Promise = global.Promise;

export const ExampleSchema = new Schema({
    exampleAttr1: String,
    exampleAttr2: String,
    exampleAttr3: String,
});


