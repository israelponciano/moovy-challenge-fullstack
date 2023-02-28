export interface Movie {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
}

export interface ApiMovie {
  movieName: string;
  moviePoster: string;
  movieYear: string;
  imdbId: string;
}


export interface ApiReview {
  imdbId: string;
  review: string;
}


