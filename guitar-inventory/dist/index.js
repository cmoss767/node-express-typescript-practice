"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 8080;
// configure express to use EJS
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    // render the ejs template
    res.render("index");
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at port ${port}`);
});
//# sourceMappingURL=index.js.map