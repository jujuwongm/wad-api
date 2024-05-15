export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e51d4f478ed0e1d006536d85c79c1b2a&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };