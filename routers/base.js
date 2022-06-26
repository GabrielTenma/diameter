import { getHealthInfo } from "../controller/healthCheckController.js";
import * as utils from "../utils/default.js";

// Init Routers
export function initRouters(app) {
    app.get('/', (req,res) => {
        getHealthInfo(req,res);
    })
    utils.log(initRouters.name, 'Routers loaded');
}
