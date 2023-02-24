import { ApiMovie, ApiMovieDelete } from "../../interfaces/Interfaces";
import { Api } from "../providers/Api";

const getAllMovies = () => Api.get<Array<ApiMovieDelete>>('/lib/get')

const postNewMovie = (movie: ApiMovie) => Api.post<ApiMovie>('/lib/new', movie)

const deleteMovie = (id: string) => Api.delete(`/lib/del/${id}`)

export const MoovyServices = {
  getAllMovies,
  postNewMovie,
  deleteMovie,
};
