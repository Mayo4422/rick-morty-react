export default function Character(props){
    const {characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }

    return(
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}> Volver al home </span>
            <div className="container-characters">
                {characters.map((character, index)=> (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                        
                        <h6>
                            {character.status === "Alive" ?(
                                <>
                                    <span className="alive" /> Vivo
                                </>
                            ) : (
                                <>
                                <span className="dead" /> Muerto
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey"> Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>

              <p>
                <span className="text-grey">Género:</span>{" "}
                {character.gender === "Male"
                  ? "Masculino"
                  : character.gender === "Female"
                  ? "Femenino"
                  : "Desconocido"}
              </p>

              <p>
                <span className="text-grey">Última ubicación:</span>{" "}
                {character.location.name}
                </p>
                        </div>
                    </div>
            ))}

        </div>
        </div>
    );
}