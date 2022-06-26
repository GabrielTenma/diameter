import { defaultRs } from "../model/response/defaultRs.js";

var currentDate = new Date();
export var getDateTime = "" + currentDate.getDate() + "/"
    + (currentDate.getMonth() + 1) + "/"
    + currentDate.getFullYear() + " - "
    + currentDate.getHours() + ":"
    + currentDate.getMinutes() + ":"
    + currentDate.getSeconds();

/**
 * Construct default response
 * @param {status} http status ('success'/'businessError'/'systemError')
 * @param {message} error message
 * @returns json defaultRs
 */
export function constructResponse(caller, status, message) {
    switch (status) {
        case 'success':
            log(caller, 'Response: OK');
            return new defaultRs('success', '01', message);
        case 'businessError':
            log(caller, 'Response failed: ' + message);
            return new defaultRs('failed', '02', message);
        case 'systemError':
            log(caller, 'Response error: ' + message);
            return new defaultRs('error', '99', message);
    }
}

/**
 * collect log with formatted message
 * @param {app} get function
 * @param {message} reason
 */
export function log(appName, message) {
    console.log('[%s] -- [%s] : %s', getDateTime, appName, message);
}