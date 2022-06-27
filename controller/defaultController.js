import { constructResponse } from "../utils/base.js";
import * as utils from "../utils/base.js";

export const getNotFound = async (req,res) => {
    try{
        res.status(404).json(await constructResponse(getNotFound.name, 'businessError', 'unknown request, not found.'));
    } catch (error) {
        res.status(500).json(constructResponse(getNotFound.name, 'error', error.message));
    }
}