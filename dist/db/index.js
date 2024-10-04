"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
console.time("start");
mongoose_1.default.connect('mongodb+srv://root:amitp1234@cluster0.rjtyl8j.mongodb.net/ts_practice').then(() => {
    console.log('db is connected successfully');
}).catch((error) => {
    console.log(error);
});
console.timeEnd("start");
