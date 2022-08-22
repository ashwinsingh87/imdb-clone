import './App.css';
import React from 'react';
import Header from './components/header/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './page/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './page/movieDetail/movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/> 
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path='movie/:id' element = {<Movie/>}></Route>
          <Route path='movies/:type' element = {<MovieList/>}></Route>
          <Route path='/*' element = {<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
     </div>
  );
};

export default App;
