// Import the the local storage function
import {readFromLS} from "./localStorage.js";

/**
 * Converts and returns minutes to milliseconds.
 * @param {*} minutes 
 */
function convertMinutesToMilliseconds(minutes) {
    return minutes * 60000;
}

/**
 * Gets the time difference from the last time the user
 * navigated to the page. Returns the difference in minutes.
 */
function getTimeDifferenceFromLastLoad() {
    // Get the last time the user loaded the page from localStorage
    const lastUserLoginTime = readFromLS("loginTime");
    // Get the current time
    const currentTime = Date.now();
    // Get the difference in milliseconds 
    const differenceInMilliseconds = (currentTime - lastUserLoginTime)
    console.log(`It has been ${differenceInMilliseconds} ms since the user last logged in`);
    return differenceInMilliseconds;
}

export {convertMinutesToMilliseconds, getTimeDifferenceFromLastLoad};

