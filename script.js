function getCharacters() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            const characters = data.results;
            characters.forEach((character) => {
                // Variables character
                const name = character.name;
                const img = character.image;
                const origin = character.origin.name;
                const status = character.status;

                //
                const divCharacter = document.createElement("div");
                divCharacter.classList.add("character");
                divCharacter.innerHTML = `
                <p class="nameCharacter">${name}<p>
                <img class="imgCharacter" src="${img}" alt="Image of ${name}">
                <p class="originCharacter">${origin}<p>
                <p class="statusCharacter">${status}<p>`;
                listCharacters.append(divCharacter);
            });
        })
        .catch((error) => console.error(error));
}

const listCharacters = document.getElementById("listcharacters");

getCharacters();
