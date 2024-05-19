import React from 'react';
import { useQuery } from 'react-query';
import { getTopRatedMovies } from '../api/movies-api';

const TopRatedMoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('topRatedMovies', getTopRatedMovies);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const topRatedMovies = data.results;
    const topRatedMoviesDisplay = (
        <div>
            {topRatedMovies.map(movie => (
                <li key={movie.id}>{movie.id}, {movie.title}<br /></li>
            ))}
        </div>
    );

    return (
        <div>
            <h2>Top Rated Movies</h2>
            {topRatedMoviesDisplay}
        </div>
    );
};

export default TopRatedMoviesPage;
