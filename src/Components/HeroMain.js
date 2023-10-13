import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const HeroMain = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            My time-app with different times!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Hi, this is my time-app. I have discovered that I'm using at least 3
            different timezones. I have friends in europe, and also work to USA
            companies but I'm living in Argentina. So I decided to keep
            practicing react and js making this app. I hope that you find it
            useful.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};
export default HeroMain;
