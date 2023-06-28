import { Skeleton, Grid } from "@mui/material";

const Loading = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <Grid container spacing={2}>
      {arr.map((ele) => (
        <Grid item key={ele}>
          <Skeleton variant="rounded" width={300} height={300} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Loading;
