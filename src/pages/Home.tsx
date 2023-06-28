import { SimpleGrid, Container, Box } from "@chakra-ui/react";
import { Loading, MovieCard, Paginate } from "../components";
import { useAuth } from "../context/DataContext";
import { DataContextProps } from "../global.types";

const Home = () => {
  const { movies } = useAuth() as DataContextProps;

  return (
    <Container className="p-10 ">
      {movies !== undefined ? (
        <Box>
          <SimpleGrid columns={3} spacing={40}>
            {movies.map((movie: any) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </SimpleGrid>
          <Paginate />
        </Box>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Home;
