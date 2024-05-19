import React from 'react';
import { useQuery } from 'react-query';
import { getTopRatedMovies } from '../api/movies-api';

const TopRatedMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('topRated', getTopRatedMovies);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const moviez = data.results; // Adjust if necessary based on the API response structure
    const moviesDisplay = (
        <div>
            {moviez.map(movie => (
                <li key={movie.id}>{movie.id}, {movie.title}<br /></li>
            ))}
        </div>
    );

    return (
        <div>
            <h2>Top Rated Movies</h2>
            {moviesDisplay}
        </div>
    );
};

export default TopRatedMoviesPage;
