// Import the CharacterController
import CharacterController from "./characterController.js";

// Create an instance of the character controller
let tomagotchi = new CharacterController();

// Show the tomagotchi
tomagotchi.showCharacter("Egg", "default");

// Cause the egg to hatch
setTimeout(() => {tomagotchi.showCharacter("Egg", "hatching")}, 300000); // 300000 is 5 minutes. You multiply the muliseconds by 60000 to get a minute.
 

// Change to the default baby tchi animation
setTimeout(() => {tomagotchi.showCharacter("Baby-Tchi", "default")}, 310000); // Needs to be 10000 ms after the hatching animation starts. 310000 is five minutes after.



