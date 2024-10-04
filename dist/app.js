"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./db/index");
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 4000;
app.use("/api", user_1.default);
app.get("/", (req, res) => {
    res.json({ message: "welcome to port 4000....." });
});
app.listen(port, () => {
    console.log('server is up on the port 4000');
});
