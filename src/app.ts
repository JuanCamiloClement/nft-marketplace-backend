import express from "express";

import configExpress from "./config/express";
import routes from "./routes";

const app = express();
const port = process.env.PORT || 8080;

configExpress(app);

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next(); // Continue processing the request
});

routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
