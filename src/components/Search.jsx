import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  return <header className="search-container">
    <form action="">
      <input type="text" placeholder="type your meal!" className="form-input"/>
      <button type="submit" className="btn">search</button>
      <button className="btn btn-hipster">Suprise Me!</button>
    </form>
  </header>
}

export default Search;