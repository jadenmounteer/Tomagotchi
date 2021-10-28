// Import the CharacterController
import CharacterController from "./characterController.js";
import {getTimeDifferenceFromLastLoad} from "./timeKeeping.js";
import {writeToLS} from "./localStorage.js";

// Get the last time the user logged in from local storage
let millisecondsSinceLastLogin = getTimeDifferenceFromLastLoad();

// Write the current time to local storage
writeToLS("loginTime", Date.now());

// Create an instance of the character controller
let tomagotchi = new CharacterController();

// Initialize the character
tomagotchi.initializeCharacter(millisecondsSinceLastLogin);

// Set a temporary onclick listener on the middle button to reset the Tomagotchi
// Desktop
document.getElementById("button-2").addEventListener("click", () => {
    // Clear localStorage
    localStorage.clear();
    // Initialize the character
    tomagotchi.initializeCharacter(millisecondsSinceLastLogin);
    alert("You have reset your Tomagotchi");

});
// Mobile
document.getElementById("button-2").addEventListener("click", () => {
    // Clear localStorage
    localStorage.clear();
    // Initialize the character
    tomagotchi.initializeCharacter(millisecondsSinceLastLogin);
    alert("You have reset your Tomagotchi");

});



