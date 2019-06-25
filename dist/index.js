"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = process.env.PORT || 3000;
server_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map