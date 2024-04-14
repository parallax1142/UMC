import React, { useState } from 'react';
import './Movies.css'; 
import { movies } from './API';

function MovieCard({ movie }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div 
            className="movie-card" 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            {isShown && (
                <div className="movie-details">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            )}
        </div>
    );
}

export default function App() {
    return (
        <div className="app">
            {movies.results.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}