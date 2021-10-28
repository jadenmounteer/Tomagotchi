class CharacterView {

    /**
     * Renders the character to the screen
     * @param {*} characterGif 
     */
    renderCharacter(characterGif) {
        console.log("Rendering the character");
        // Get the image tag where we will render the character
        let imageTag = document.getElementById("character-gif");

        // Set the source attribute to the new gif
        imageTag.setAttribute("src", characterGif);

    }

}

export default CharacterView;