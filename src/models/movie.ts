export interface Movie {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Poster: string,
  Ratings: Rating[],
  imdbRating: string
}

interface Rating {
  Source: string,
  Value: string
}