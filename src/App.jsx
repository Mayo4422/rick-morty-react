import { useState } from "react"
import imageRickyMorty from "./images/rick-morty.png";
import "./App.css";
import Character from "./components/Character";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    console.log(characterApi);
    setCharacters(characterApi.results);
  }
  //console.log(characters);
  return (
    <>
      <div>
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Character characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
          <img src={imageRickyMorty} alt="rick y morty " className="img-home" />
        <br />
        <button onClick={reqApi} className="btn-search">
          Buscar personajes
        </button>
        </>
        )}
      </div>
    </>
  );
}

export default App;