import React from "react";
import { useQuery } from 'react-query';
import { getMovies } from "../api/movies-api";
import MovieCard from "./movieCard/index";
import Grid from "@mui/material/Grid";

const MoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('discover', getMovies)

  if (isLoading) {
      return <h1>Loading...</h1>
  }

  if (isError) {
      return <h1>{error.message}</h1>
  }

  const movies = data;

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Movies</h2>
      <Grid container spacing={3}>
        {movies.map(movie => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MoviesPage;
