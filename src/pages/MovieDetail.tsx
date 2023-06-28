import { useParams, Navigate } from "react-router-dom";
// import { Fragment } from "react";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";
import { IMG_URL } from "../constants";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Rating } from "../components";

const MovieDetail = () => {
  const { id } = useParams();
  const { movies } = useAuth() as DataContextProps;

  const movie = movies.find((movie: any) => movie.id === Number(id));

  if (movie === undefined) return <Navigate to="/notfound" />;

  return (
    <Container className="center font-header flex-col bg-slate-200 shadow-inner w-[80%] mx-auto my-10 p-4">
      <Heading className="font-bold text-3xl mb-10">
        {movie.original_title}
      </Heading>
      <div className="flex justify-between items-center">
        <Box className="min-w-[50%] p-6">
          <img
            className="w-[400px] rounded-xl"
            src={`${IMG_URL}/${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <Text className="font-semibold py-4">
            Release Date: <span className="pl-4">{movie.release_date}</span>
          </Text>
          <span className="flex">{Rating(movie.vote_average)}</span>
        </Box>
        <Box className="text-xl detail-span">
          <Text className="text-2xl">{movie.overview}</Text>
          <Box className="shadow-inside rounded-md bg-white max-w-full text-center">
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
