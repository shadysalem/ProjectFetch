// javascript

const div = document.getElementById("movie");
div.addEventListener("click", (event) => {
  event.preventDefault();
  const movieName = document.getElementById("text").value;

  //movie
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=9b32cf47ce3b6d0d186ce6db0bc4eedb`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length == 0) {
        document.getElementById("summary").innerHTML = "Movie Not Found";
        document.getElementById("rating").innerHTML = " ";
        document.getElementById("realeseDate").innerHTML = " ";
        document.getElementById("title").innerHTML = " ";
      } else {
        document.getElementById("summary").innerHTML = data.results[0].overview;
        document.getElementById("rating").innerHTML =
          "Rating: " + data.results[0].vote_average;
        document.getElementById("realeseDate").innerHTML =
          "Realese Date: " + data.results[0].release_date;
        document.getElementById("title").innerHTML =
          "Title: " + data.results[0].title;
      }
    });
  //giphy
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=YyjKvxfexCT407XeTHhMkpZ5RnNDouZA&limit=1&q=${movieName}`
  )
    .then((response) => response.json())
    .then((info) => {
      while (document.getElementById("imgs").firstChild) {
        document
          .getElementById("imgs")
          .removeChild(document.getElementById("imgs").firstChild);
      }
      let img = document.createElement("img");
      if (info.data.length == 0) {
        fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=YyjKvxfexCT407XeTHhMkpZ5RnNDouZA&limit=1&q=404"
        )
          .then((res) => res.json())
          .then((content) => {
            img.src = content.data[0].images.fixed_height_downsampled.url;
          });
      } else {
        img.src = info.data[0].images.fixed_height_downsampled.url;
      }
      document.getElementById("imgs").appendChild(img);
    });
});
