import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";
import { IMG_URL } from "../constants";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Rating } from "../components";

const MovieDetail = () => {
  const { id } = useParams();
  const { movies, darkTheme } = useAuth() as DataContextProps;

  const movie = movies.find((movie: any) => movie.id === Number(id));

  if (movie === undefined) return <Navigate to="/notfound" />;

  return (
    <Container
      className={`animate center font-header flex-col shadow-inner w-[80%] mx-auto my-10 p-4 ${
        darkTheme ? "bg-[#302b63] text-white" : "bg-[#eaf5c9] "
      }`}
    >
      <Heading className="font-bold text-3xl mb-6">
        {movie.original_title}
      </Heading>
      <div className="flex xl:flex-row flex-col justify-between items-center w-full">
        <Box className="w-full xl:min-w-[50%] p-6">
          <img
            className="w-full rounded-xl"
            src={`${IMG_URL}/${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <Text className="font-semibold py-4">
            Release Date: <span className="pl-4">{movie.release_date}</span>
          </Text>
          <span className="flex">{Rating(movie.vote_average)}</span>
        </Box>
        <Box className="text-xl detail-span">
          <Text className="text-xl lg:text-2xl">{movie.overview}</Text>
          <Box className="shadow-inside rounded-md bg-white text-black max-w-full text-center">
            <Text className="mt-4">
              Popularity: <span>{movie.popularity}</span>
            </Text>
            <Text>
              Vote Count: <span>{movie.vote_count}</span> votes
            </Text>
            <Text>
              Vote Receive:
              <span>
                {Math.round(
                  Math.round((movie.vote_average * movie.vote_count) / 10)
                )}
              </span>
              votes
            </Text>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default MovieDetail;
