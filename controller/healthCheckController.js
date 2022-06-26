import { constructResponse } from "../utils/default.js";
import * as utils from "../utils/default.js";

// Get System Health Information
export const getHealthInfo = async (req, res) => {
    try {
        const result = constructResponse(getHealthInfo.name, 'success', 'health: ok');
        res.json(result);
    } catch (error) {
        utils.log(getHealthInfo.name, error.message);
        const consRes = constructResponse('error', error.message);
        res.status(500).json(consRes);
    }
}