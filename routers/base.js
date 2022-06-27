import bodyParser from "body-parser";
import { getNotFound } from "../controller/defaultController.js";
import { getConfig, getHealthInfo, writeConfig } from "../controller/sysinfoController.js";
import * as utils from "../utils/base.js";

// Init Routers
export function initRouters(app) {

    var jsonParser = bodyParser.json();
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    // catch all request
    app.use(function (req, res, next) {
        utils.log('incoming request', req.headers['host'] + ' -> ' + req.options);
        next(); // MUST call this or the routes will not be hit
    });

    app.get('/', (req, res) => {
        getHealthInfo(req, res);
    })
    app.get('/config', (req, res) => {
        getConfig(req, res);
    })
    app.post('/config', jsonParser, (req, res) => {
        writeConfig(req, res);
    })

    // 404 Route
    app.get('*', function (req, res) {
        getNotFound(req,res);
    });


    utils.log(initRouters.name, 'Routers loaded');
}
