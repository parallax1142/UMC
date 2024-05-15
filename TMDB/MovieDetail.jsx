import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id, vote_average, overview, release_date, title, poster_path } = useParams(); // URL에서 파라미터 추출

  return (
    <div>
      <div><img src={poster_path} alt={title}></img></div>
      <div>
        <h2>{title}</h2>
        <p><strong>평점:</strong> {vote_average}</p>
        <p><strong>개봉일:</strong> {release_date}</p>
        <p><strong>줄거리:</strong> {overview}</p>
      </div>
    </div>
  );
}

export default MovieDetail;
