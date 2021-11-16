import { useEffect, useState } from "react";
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('Jenny');
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const [movies, setMovies] = useState([]);
  const [infosMovies, setInfosMovies] = useState();
  const [initialPage, setPage] = useState(1);

  const url = 'https://rickandmortyapi.com/api/character';
  const urldbMovie = 'https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=xmen&language=fr-FR'
  
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setResults(response.data.results)
      setInfo(response.data.info)
    });
    axios.get(urldbMovie)
    .then(response => {
      setMovies(response.data.results)
      setInfosMovies(response.data.total_pages)
    });
  }, [])

  const nextPage = () => {
    const nextPage = initialPage + 1;
    if (nextPage <= infosMovies) {
      setPage(initialPage + 1);
      axios.get(`${urldbMovie}&page=${nextPage}`)
      .then(response => {
        setMovies(response.data.results)
      });
    }
    console.log(infosMovies)
  }

  const prevPage = () => {
    const prevRequest = info.prev;
    axios.get(prevRequest)
    .then(response => {
      setResults(response.data.results)
      setInfosMovies(response.data.total_pages)
    })
  }

  console.log(initialPage);
  return (
    <div className="App">{name}
      <button onClick={() => setName('Plop')}>Click</button>
      <div>
        <button onClick={() => prevPage()}>PREV</button>
        <button onClick={() => nextPage()}>NEXT</button>
        {
          movies  ? movies.map(movie => 
          <div>
            <h2>{movie.title}</h2>
          </div>  
          ) : "No result"
        }
      </div>
    </div>
  );
}

export default App;
