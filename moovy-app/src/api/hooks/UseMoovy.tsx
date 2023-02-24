import { useCallback, useState } from "react";
import { MoovyServices } from "../services/MoovyServices"
import { ApiMovie } from "../../interfaces/Interfaces";

export const useMoovy = () => {
  const [movies, setMovies] = useState<Array<ApiMovie>>();

  const getAllMovies = useCallback(async () => {
    const { data, status } = await MoovyServices.getAllMovies();

    if (status !== 200) throw new Error();

    setMovies(data);
  }, []);

  const postNewMovie = useCallback(async (movie: ApiMovie) => {
    const { status } = await MoovyServices.postNewMovie(movie);

    if (status !== 201) throw new Error();
  }, []);

  return {
    movies,
    getAllMovies,
    postNewMovie,
  }
}