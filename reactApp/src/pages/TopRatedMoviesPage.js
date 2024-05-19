import React, { useEffect, useState } from 'react';
import MovieCard from "./movieCard/index";
import Grid from "@mui/material/Grid";

const TopRatedMoviesPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&sort_by=vote_average.desc`
        );

        if (!response.ok) {
          throw new Error((await response.json()).message);
        }

        const data = await response.json();
        setTopRatedMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchTopRatedMovies();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

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
