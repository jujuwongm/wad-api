import React from "react";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme with Montserrat font
const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat'
    ].join(','),
  },
});

export default function MovieCard({ movie, action }) {
  // Calculate the percentage based on the movie's vote_average
  const percentage = Math.round(movie.vote_average * 10); 

  // Determine stroke color based on the percentage range
  let strokeColor;
  if (percentage < 60) {
    strokeColor = '#B2042F'; //green
  } else if (percentage >= 60 && percentage <= 73) {
    strokeColor = '#EDD300'; //yellow
  } else {
    strokeColor = '#90cea1'; //red
  }

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            movie.favorite ? (
              <Avatar sx={{ backgroundColor: 'red' }}>
                {/* Placeholder for missing FavoriteIcon */}
              </Avatar>
            ) : null
          }
          title={
            <Typography variant="h5" component="p">
              {movie.title}{" "}
            </Typography>
          }
        />
        <CardMedia
          sx={{ height: 500 }}
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "https://cdn.britannica.com/02/215002-050-513175D0/American-actor-Danny-DeVito-2016.jpg"
          }
        />

        <CardContent>
          <svg height="100" width="100" style={{ marginTop: "-60px", marginLeft: "-20px" }}>
            {/* First circle: Background white and no stroke*/}
            <circle cx="50" cy="50" r="30" stroke="transparent" strokeWidth="4" fill="white" />

            {/* Second circle: Percentage indicator colour, no fill and stroke color depends on the percentage */}
            <circle cx="50" cy="50" r="30" stroke={strokeColor} strokeWidth="4" fill="none" />

            {/* Text to display the percentage */}
            <text 
              fontFamily="montserrat"  
              x="50%" y="50%"  // Position the text at the center of the SVG
              textAnchor="middle"  // Center-align the text horizontally
              stroke="black" strokeWidth="0.5"  // Set stroke color
              dy=".3em"  // Adjust vertical alignment
            >
              {percentage}%  {/* Display the percentage and add the % symbol */}
            </text>
          </svg>

          {/* Movie release date */}
          <Grid container>
            <Grid item xs={6} marginBottom={-2} marginTop={-1}> 
              <Typography variant="h6" component="p">
                {/* Placeholder for missing CalendarIcon */}
                {movie.release_date}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions disableSpacing>
          {action && typeof action === 'function' && action(movie)} {/* Check if action is a function */}
          <Link to={`/movies/${movie.id}`}>
            {/* Placeholder for missing Button component */}
          </Link>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
