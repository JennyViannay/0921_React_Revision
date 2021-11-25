import axios from "axios";
import { useEffect, useState } from "react";

import { CoffeeMaker } from "./components/CoffeeMaker";
import { AllCharacters } from "./components/AllCharacters";
import { CharacterCard } from "./components/CharacterCard";
import { FilterCharacters } from "./components/FilterCharacters";
import { Infos } from "./components/Infos";
import { Pagination } from "./components/Pagination";

const App = () => {
  const [characters, setCharacters] = useState([])
  const [infos, setInfos] = useState({})
  const [page, setPage] = useState(1);

  useEffect(() => {
    sendRequestCharacters(1)
  }, [])

  const sendRequestCharacters = (numberPage) => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${numberPage}`)
      .then(res => res.data)
      .then(data => {
        setStates(data)
      })
    setPage(numberPage)
  }

  const setStates = (data) => {
    setCharacters(data.results);
    setInfos(data.info);
  }

  const getCharactersAlive = () => {
    setCharacters(characters.filter(character => character.status === "Alive"));
  }

  const getCharactersDead = () => {
    setCharacters(characters.filter(character => character.status === "Dead"));
  }

  const getCharactersFromEarth = () => {
    setCharacters(characters.filter(character => character.origin.name === "Earth (C-137)"));
  }

  // console.log(characters);
  // console.log(infos);
  return (
    <div className="container">
      <CoffeeMaker />
      {/* <Infos infos={infos} page={page} />
      <Pagination infos={infos} page={page} sendRequestCharacters={sendRequestCharacters} />
      <div className="my-5"></div>
      <FilterCharacters getCharactersAlive={getCharactersAlive} getCharactersDead={getCharactersDead} getCharactersFromEarth={getCharactersFromEarth} />
      <div className="row">
        {characters ? characters.map(character =>
          <CharacterCard character={character} />
        ) : 'No results'
        }
      </div>
      <div><AllCharacters /></div> */}
    </div>
  );
}

export default App;
