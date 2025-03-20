fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        const characters = data.results;
        characters.forEach((character) => {
            const name = character.name;
            const img = character.image;
            const origin = character.origin.name;
            const status = character.status;
            console.log(
                `Name: ${name}, IMG: ${img}, ORIGIN: ${origin}, STAUTS: ${status}`
            );
        });
    })
    .catch((error) => console.error(error));
