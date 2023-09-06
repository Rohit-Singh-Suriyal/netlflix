const key = "20a16400fe2972ffc1a5c5c84f714fc5";
const Request = {
  request_poular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  request_toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  request_upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,  
  requesttrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  request_horror: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,

 
};
export default Request;
