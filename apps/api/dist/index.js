import express from "express";
import { formateCurrency } from "@monorepo/utils";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    return res.send("hello world");
});
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
//# sourceMappingURL=index.js.map