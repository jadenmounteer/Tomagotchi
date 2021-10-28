// Import the model and the view
import CharacterModel from './characterModel.js';
import CharacterView from './characterView.js';

class CharacterController {

    // Constructor
    constructor() {
        this.characterModel = new CharacterModel();
        this.characterView = new CharacterView();
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

}

export default CharacterController;