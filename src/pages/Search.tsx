import { Input, Box, Stack } from "@chakra-ui/react";

const Search = () => {
  return (
    <Box className="px-20 py-10">
      <Stack spacing={3}>
        <Input variant="filled" placeholder="Filled" />
      </Stack>
    </Box>
  );
};

export default Search;
