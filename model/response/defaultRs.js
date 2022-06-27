import { getDateTime } from "../../utils/base.js";

export class defaultRs{
    constructor(status, code, message){
        var result = {
            'date': getDateTime,
            'status': status,
            'code': code,
            'message': message
        };
        return result;
    }

    getMessage() {
        return message;
    }
}