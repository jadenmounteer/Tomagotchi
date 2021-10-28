// Import the model and the view
import CharacterModel from './characterModel.js';
import CharacterView from './characterView.js';
import { writeToLS } from './localStorage.js';


class CharacterController {

    // Constructor
    constructor() {
        this.characterModel = new CharacterModel();
        this.characterView = new CharacterView();
        this.currentCharacterName = this.characterModel.getCurrentCharacterName(); 
        this.currentCharacterAction = this.characterModel.getCurrentCharacterAction();
      }

    /**
     * Initializes the character based on the current character,
     * its stats, and the minutes that have passed since the last login.
     */
    initializeCharacter(millisecondsSinceLastLogin) {

        // Call the showCharacter method
        this.showCharacter(this.currentCharacterName, this.currentCharacterAction);

        // Show the tomagotchi by removing a class
        document.getElementById("character-gif").classList.remove("no-image");

        // Animate the character
        this.animate();

    }

    /**
     * Animates the character according to the status
     */
    animate() {
        // Call the set Animation method to make the character hatch out of the egg
        this.setAnimation(this.currentCharacterName, this.currentCharacterAction, "Baby-Tchi", "default", 300000, 10000);
    }

    /**
     * Uses the model and the view to show the character
     */
    showCharacter(character, action) {
        // Get the character animation from the model
        const characterGif = this.characterModel.getCharacterAnimation(character, action);

        // Render the animation to the screen using the view
        this.characterView.renderCharacter(characterGif);
    }

    /**
     * Causes the Tomagotchi to hatch
     */
    setAnimation(firstAnimationCharacter, firstAnimationAction, secondAnimationCharacter, secondAnimationAction, animationDuration, millisecondsToNextAnimation) {
        // Calculate the total milliseconds to next animation
        let totalMillisecondsToNextAnimation = millisecondsToNextAnimation + animationDuration;
        // Play the first animation
        setTimeout(() => {this.showCharacter(firstAnimationCharacter, firstAnimationAction)}, 300000); // 300000 is 5 minutes. You multiply the muliseconds by 60000 to get a minute.
        // Play the second animation
        setTimeout(() => {
            // Show the character
            this.showCharacter(secondAnimationCharacter, secondAnimationAction)
            // Set the new character and action to localStorage
            writeToLS("characterName", secondAnimationCharacter);
            writeToLS("characterAction", secondAnimationAction);
        }, totalMillisecondsToNextAnimation); // Needs to be 10000 ms after the hatching animation starts. 310000 is five minutes after.
        
    }

}

export default CharacterController;