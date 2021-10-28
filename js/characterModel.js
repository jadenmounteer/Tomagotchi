import {readFromLS, readSingleStringFromLS} from "./localStorage.js";

// A list to hold all of the characters objects
let listOfCharacters = [
    {
        name: 'Egg',
        defaulfGifSrc: 'assets/egg.gif',
        hatchingGifSrc: 'assets/hatching.gif',
        minutesToEvolve: 5,
        nextEvolution: 'Baby-Tchi'
    },
    {
        name: 'Baby-Tchi',
        defaulfGifSrc: 'assets/baby-tchi.gif',
        minutesToEvolve: 65
    } 
];

/**
 * The CharacterModel holds all of the information for a character
 */
class CharacterModel {

    /**
     * Gets the character animation we need at the moment.
     */
    getCharacterAnimation(characterName, action) {
        // Get the current character
        let currentCharacter = this.getCurrentCharacter(characterName);

        console.log(`The gif for the current character is ${currentCharacter.defaulfGifSrc}`);

        // Determine the correct animation based on the action
        let currentAnimation = "";
        switch (action) {
            case "default": 
                currentAnimation = currentCharacter.defaulfGifSrc;
                break;
            case "hatching":
                currentAnimation = currentCharacter.hatchingGifSrc;
        }
            
        // Return the current animation
        return currentAnimation;

    }

    /** 
     * Returns the current character
     */
     getCurrentCharacter(characterName) {
        // Get the current character
        for (let i=0; i<listOfCharacters.length; i++) {
            if (listOfCharacters[i].name == characterName) {
                return listOfCharacters[i];
            }
        }
    }

    getCurrentCharacterName() {
        // Grab it from local storage
        let currentName = readSingleStringFromLS("characterName");
        
        // if it is null, set it to "Egg"
        if (currentName == null) {
            currentName = "Egg";
        }

        // Return the name
        return currentName;

    }

    getCurrentCharacterAction() {
        // Grab it from local storage
        let currentAction = readSingleStringFromLS("characterAction");
        
        // if it is null, set it to "default"
        if (currentAction == null) {
            currentAction = "hatching";
        }

        // Return the name
        return currentAction;

    }

    /**
     * Returns the time to evolve depending on the character
     */
    getCurrentCharacterTimeToEvolve() {
        let currentCharacter = this.getCurrentCharacter();
        return currentCharacter.minutesToEvolve * 60000;
    }

}

export default CharacterModel;