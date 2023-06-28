import { Card, Box, Heading, Stack, CardBody } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Rating } from "../components";
import { IMG_URL } from "../constants";

const MovieCard = ({ movie }: { movie: any }) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
  };
  return (
    <Card
      className="group cursor-pointer image-wrapper"
      onClick={() => handleClick(movie.id)}
    >
      <Box className="group-hover:blur-sm overflow-hidden rounded-3xl">
        <img
          src={`${IMG_URL}/${movie.poster_path}`}
          className="group-hover:scale-110"
        />
        <Box className="absolute text-white bottom-0 p-8 flex flex-col gap-2">
          <Heading className="text-4xl font-header">{movie.title}</Heading>
          <span className="font-semibold">{movie.release_date}</span>
          <Stack direction="row">{Rating(movie.vote_average)}</Stack>
        </Box>
      </Box>

      <CardBody className="content text-2xl text-[#302b63] rounded-3xl font-header w-full opacity-0  group-hover:opacity-100 translate-x-[100%] group-hover:translate-x-0">
        <Stack className="card">
          <Heading className="text-4xl text-center">
            {movie.original_title}
          </Heading>
          <div>
            <span>Release Date:</span>
            <span>{movie.release_date}</span>
          </div>
          <div>
            <span>MovidID:</span>
            <span>{movie.id}</span>
          </div>
          <div>
            <span>Popularity:</span>
            <span>{movie.popularity}</span>
          </div>
          <div>
            <span>Lang:</span>
            <span>{movie.original_language}</span>
          </div>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
