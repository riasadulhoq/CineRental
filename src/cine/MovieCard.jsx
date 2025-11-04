import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../context";
import { getImagePath } from "../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  //   console.log(movie);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const imagePath = getImagePath(movie.cover);
  //   console.log(imagePath);

  const { state, dispatch } = useContext(MovieContext);
  console.log(state.moviesInCart);

  const handleSelectedMovie = (movieObject) => {
    setShowModal(true);
    setSelectedMovie(movieObject);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleAddToCart = (event, movieObject) => {
    event.stopPropagation();
    // console.log(movieObject);

    const found = state.moviesInCart.find(
      (movie) => movie.id === movieObject.id
    );

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: movieObject,
      });
      toast.success(`${movieObject.title} has been added to Cart!`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`${movieObject.title} has already been added!`, {
        position: "bottom-right",
      });
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          selectedMovie={selectedMovie}
          onClose={handleCloseModal}
          onAdd={handleAddToCart}
        />
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleSelectedMovie(movie)}>
          <img
            className="w-full object-cover"
            src={imagePath}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
