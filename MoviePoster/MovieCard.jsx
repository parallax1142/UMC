import React, { useState } from 'react';
import './Movies.css';
import MovieDetails from './MovieDetails'; // MovieDetails 컴포넌트 import

function MovieCard({ movie }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            className="movie-card"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            {isShown && <MovieDetails movie={movie} />} {/* MovieDetails 컴포넌트를 올바르게 렌더링 */}
        </div>
    );
}

export default MovieCard;