import { useCallback, useState } from "react";
import { MoovyServices } from "../services/MoovyServices"
import { ApiMovie, ApiMovieDelete } from "../../interfaces/Interfaces";

export const useMoovy = () => {
  const [movies, setMovies] = useState<Array<ApiMovieDelete>>();

  const getAllMovies = useCallback(async () => {
    const { data, status } = await MoovyServices.getAllMovies();

    if (status !== 200) throw new Error();

    setMovies(data);
  }, []);

  const postNewMovie = useCallback(async (movie: ApiMovie) => {
    const { status } = await MoovyServices.postNewMovie(movie);

    if (status !== 201) throw new Error();
  }, []);

  const deleteFavMovie = useCallback(async (id: string) => {
    const { status } = await MoovyServices.deleteMovie(id);
    if (status !== 200) throw new Error();
  }, []);

  return {
    movies,
    getAllMovies,
    postNewMovie,
    deleteFavMovie,
  }
}