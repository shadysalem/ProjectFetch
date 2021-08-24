// javascript

const div = document.getElementById("movie");
div.addEventListener("click", (event) => {
  event.preventDefault();
  const movieName = document.getElementById("text").value;

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=9b32cf47ce3b6d0d186ce6db0bc4eedb`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
});
