import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

const TMDB_API_KEY = 'e51d4f478ed0e1d006536d85c79c1b2a'; // Replace with your TMDB API key
const favoriteMovies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'Pulp Fiction',
    'Forrest Gump'
];

const ProfilePage = () => {
    const { userName } = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState("https://m.media-amazon.com/images/I/61CxTq7IH+L._AC_UF894,1000_QL80_.jpg");
    const [moviePosters, setMoviePosters] = useState([]);

    // Function to handle the image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Function to fetch movie data from TMDB
    const fetchMovieData = async (movieTitle) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieTitle)}`);
        const data = await response.json();
        return data.results[0] ? data.results[0].poster_path : null;
    };

    // Fetch posters for favorite movies on component mount
    useEffect(() => {
        const fetchPosters = async () => {
            const posters = await Promise.all(favoriteMovies.map(movie => fetchMovieData(movie)));
            setMoviePosters(posters);
        };
        fetchPosters();
    }, []);

    return (
        <div style={{ textAlign: 'left', margin: '120px', fontFamily: 'Montserrat' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                {/* Profile image */}
                <img 
                    src={profileImage} 
                    alt="Profile" 
                    style={{ borderRadius: '50%', marginRight: '20px', width: '100px', height: '100px' }} 
                />
                {/* User name */}
                <h1>{userName}</h1>
            </div>
            {/* File input for image upload */}
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                style={{ marginBottom: '20px' }} 
            />
            {/* Favourite Movies section */}
            <h2>Favourite Movies</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
                {favoriteMovies.map((movie, index) => (
                    <div key={movie} style={{ textAlign: 'center' }}>
                        {moviePosters[index] ? (
                            <img 
                                src={`https://image.tmdb.org/t/p/w200${moviePosters[index]}`} 
                                alt={movie} 
                                style={{ marginBottom: '10px', width: '100%' }} 
                            />
                        ) : (
                            <div style={{ height: '300px', backgroundColor: '#ddd', marginBottom: '10px' }} />
                        )}
                        <p>{movie}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;
