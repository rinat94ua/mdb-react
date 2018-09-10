/* eslint react/no-did-mount-set-state: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=5bcb07aa8f07d1e43144fd5fe96df5c9&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
  padding: 1rem;
`;
