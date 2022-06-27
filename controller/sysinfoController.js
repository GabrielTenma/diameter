import { constructResponse } from "../utils/base.js";
import * as utils from "../utils/base.js";
import { sysInfoUsecase } from "../usecase/sysinfoUsecase.js";

// Constructor
const sysinfoCase = new sysInfoUsecase();

// Get System Health Information
export const getHealthInfo = async (req, res) => {
    try {
        res.json(await constructResponse(getHealthInfo.name, 'success', 'running normally'));
    } catch (error) {
        res.status(500).json(constructResponse(getHealthInfo.name, 'error', error.message));
    }
}

export const getConfig = async (req,res) =>{
    try{
        res.json(await constructResponse(getConfig.name, 'success', sysinfoCase.getConfig()));
    } catch (error) {
        res.status(500).json(constructResponse(getConfig.name, 'error', error.message));
    }
}

export const writeConfig = async (req,res) => {
    try{
        res.json(await constructResponse(writeConfig.name, 'success', sysinfoCase.writeConfig(req.body)));
    } catch (error) {
        res.status(500).json(constructResponse(writeConfig.name, 'error', error.message));
    }
}