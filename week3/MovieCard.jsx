import React from 'react';
import styled from 'styled-components';

const MovieCardContainer = styled.div`
  position: relative;
  width: 200px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;
  border-radius: 10px;  // 모서리 둥글게 처리
  background-color: white;  // 배경색 추가
  &:hover {
    transform: scale(1.03);
    .movie-details {
      display: block;
    }
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .movie-details {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    width: calc(100% - 20px);
    bottom: 10px;
    left: 10px;
    border-radius: 10px;
    display: none;
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <MovieCardContainer>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
