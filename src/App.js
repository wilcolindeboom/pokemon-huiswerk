import React, {useEffect,useState} from 'react';
import './App.css';
import Card from "./components/Card";
import Button from "./components/Button";
import axios from 'axios';


function App() {

    const [offset,setOffset] = useState(0);
    const [pokemonData,setPokemonData] = useState();
    //const {next,previous} = pokemonData;



    async function fetchData(offset) {
        console.log("fetchdata");
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
            console.log(result.data);
            console.log("datafetched");
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(
        () => {
            fetchData(offset);
                    }
        ,[offset]
    );



    return (
      <>
          <img src="" alt="Pokemon logo"/>
          <nav className="browser">
          <Button onClick={()=> setOffset(offset-20) } disabled={pokemonData.next === null}>Vorige</Button>
          <Button onClick={()=> setOffset(offset+20) } disabled={pokemonData.next === null}>Volgende</Button>
          </nav>
          <div className="cardcontainer">
              {pokemonData.results.map(result =>
        <Card
            name={result.name}
            url={result.url}
        />
              )}
          </div>
      </>
  );
}

export default App;
