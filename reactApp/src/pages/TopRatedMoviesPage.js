import React from "react";
import { useQuery } from 'react-query';
import { getTopRatedMovies } from "../api/movies-api";
import MovieCard from "./movieCard/index";
import Grid from "@mui/material/Grid";

const TopRatedMoviesPage = () => {
  const { data, error, isLoading } = useQuery('topRatedMovies', getTopRatedMovies);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  const topRatedMovies = data.results;

  return (
    <div style={{ fontFamily: "Montserrat, sans-serif", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Top Rated Movies</h2>
      <Grid container spacing={3}>
        {topRatedMovies.map(movie => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TopRatedMoviesPage;
