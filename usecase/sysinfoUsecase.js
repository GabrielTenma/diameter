import * as utils from "../utils/base.js";
import fs from 'fs';

export class sysInfoUsecase{
    
    /**
     * Gather system Information
     */
    getSystemInfo(){

    }

    getConfig(){
        return JSON.parse(fs.readFileSync('./config/default.json'));
    }

    writeConfig(config){
        fs.writeFileSync('./config/default.json', JSON.stringify(config));
        return 'write config success.'
    }
}