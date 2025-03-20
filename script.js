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

                // Crear elemento div para cada personaje y
                // añadir sus diferentes datos
                const divCharacter = document.createElement("div");
                divCharacter.classList.add("character");
                divCharacter.innerHTML = `
                <span class="nameCharacter">${name}</span>
                <img class="imgCharacter" src="${img}" alt="Image of ${name}">
                <span class="originCharacter">${origin}</span>
                <span class="statusCharacter">${status}</span>`;
                listCharacters.append(divCharacter);
            });
        })
        .catch((error) => console.error(error));
}

const listCharacters = document.getElementById("listcharacters");

getCharacters();
