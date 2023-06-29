import { SimpleGrid, Container, Box } from "@chakra-ui/react";
import { Loading, MovieCard, Paginate } from "../components";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";

const Home = () => {
  const { movies, search } = useAuth() as DataContextProps;

  const Movies = ({ movies }: any) => {
    const filtered = movies.filter(
      (movie: any) =>
        movie.title.toLowerCase().includes(search) ||
        movie.overview.toLowerCase().includes(search)
    );

    return (
      <Box className="min-h-[100%]">
        <SimpleGrid columns={3} spacing={40} minChildWidth={300}>
          {filtered.map((movie: any) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </SimpleGrid>
        <Paginate />
      </Box>
    );
  };
  return (
    <Container className="p-10 ">
      {movies ? <Movies movies={movies} /> : <Loading />}
    </Container>
  );
};

export default Home;
