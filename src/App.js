import React, {useState,useEffect} from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";


function App() {
  const [pokemon,setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [prevPageUrl,setPrevPageUrl] = useState()
  const [nextPageUrl,setNextPageUrl] = useState()
  const [loading,setLoading]= useState(false)

  useEffect(() =>{
    setLoading(true)
    let cancel
    axios.get(currentPageUrl,{
      cancelToken: new axios.CancelToken(c=> cancel = c)
    }).then(res =>{
      setLoading(false)
      setPokemon(res.data.results.map(p => [p.name,p.url]))
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
    })
    return() => cancel()
  },[currentPageUrl])

  function goNext(){
    setCurrentPageUrl(nextPageUrl)
  }
  function goPrev(){
    setCurrentPageUrl(prevPageUrl)
  }

  if(loading) return "Loading..."
  return (
    <>
          <PokemonList pokemon={pokemon}/>
          <Pagination goPrev={prevPageUrl?goPrev:null} goNext={nextPageUrl?goNext:null}/>
    </>    
  );


}

export default App;
