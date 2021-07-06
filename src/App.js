import React ,{useEffect,useState}from 'react';
import './App.css';
import Movie from './components/Movie';

const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGAPI= "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies, setmovies] = useState([])
  const [searchTerm, setsearchTerm] = useState('')

  useEffect(() => {
      fetch(APIURL).then((res)=>res.json()).then((data)=>{
        console.log(data)
        setmovies(data.results);
      })
  }, [])

  const handleOnSubmit=(e) =>{
    e.preventDefault();
    if(searchTerm){
    fetch(SEARCHAPI+searchTerm).then((res)=>res.json()).then((data)=>{
      console.log(data)
      setmovies(data.results);
      })
      setsearchTerm("");
    }
  }
  const handleOnChange=(e) =>{
    setsearchTerm(e.target.value);
  }


  
  return (
    <>
    <header> 
    <h2>Movie App</h2>
      <form onSubmit={handleOnSubmit}>
        <input className="search" type="search" placeholder="Seacrh..." value={searchTerm} onChange={handleOnChange}></input>
        </form>
      </header>
      
    <div className="movie-contrainer">
      {movies.length>0&& movies.map((movie)=>
      <Movie key = {movie.id} {...movie}/>)}
    </div>
    </>
  );
}

export default App;
