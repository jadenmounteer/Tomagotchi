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
        let currentCharacter = "";
        for (let i=0; i<listOfCharacters.length; i++) {
            if (listOfCharacters[i].name == characterName) {
                currentCharacter = listOfCharacters[i];
                break;
            }
        }

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

}

export default CharacterModel;