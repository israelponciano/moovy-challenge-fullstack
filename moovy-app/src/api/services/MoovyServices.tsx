import { ApiMovie, ApiReview } from "../../interfaces/Interfaces";
import { Api } from "../providers/Api";

const getAllMovies = () => Api.get<Array<ApiMovie>>('/lib/get')

const postNewMovie = (movie: ApiMovie) => Api.post<ApiMovie>('/lib/new', movie)

const deleteMovie = (id: string) => Api.delete(`/lib/del/${id}`)

const getReview = (imdbId: string) => Api.get<ApiReview>(`/reviews/get/${imdbId}`)

const postNewReview = (review: ApiReview) => Api.post<ApiReview>('/reviews/new', review)

const deletReview = (id: string) => Api.delete(`/reviews/del/${id}`)

export const MoovyServices = {
  getAllMovies,
  postNewMovie,
  deleteMovie,
  getReview,
  postNewReview,
  deletReview,
};
