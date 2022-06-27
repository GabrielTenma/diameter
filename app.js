import express from "express";
import cors from "cors";
import * as utils from "./utils/base.js";
import * as router from "./routers/base.js";
import c from "config";

const port = c.get('server.port');

const app = express();

router.initRouters(app);
app.use(cors());
app.use(express.json());
app.listen(port, ()=> utils.log(app.name, 'Http Running on port ' + port));