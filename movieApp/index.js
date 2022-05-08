let moviesDataDiv = document.getElementById("moviesData");
//moviesDataDiv.innerHTML = null;

async function getMovies() {
  try {
    let movies = document.getElementById("moviesName").value;
    let res = await fetch(
      `http://www.omdbapi.com/?t=${movies}&apikey=3baaa1b3`
    );
    let response = await res.json();

    //let x = response.data;
    //appendMovies(x);

    appendMovies(response);

    console.log("response:", response);
  } catch (err) {
    console.log("err", err);
  }
}
//  getMovies();

function appendMovies(arr) {
  // arr.map(function (movies) {
  // arr.forEach(function (movies) {
  moviesDataDiv.innerHTML = null;

  let posterdiv = document.createElement("div");

  posterdiv.setAttribute("class", "poster");
  let datadiv = document.createElement("div");
  datadiv.setAttribute("class", "datadiv");

  let img = document.createElement("img");
  img.src = arr.Poster;

  let movieName = document.createElement("h1");
  movieName.innerText = ` Movie Name:${arr.Title} `;

  let imdb = document.createElement("p");
  imdb.innerText = ` IMDB Ratings:${arr.imdbRating} `;

  // var p = document.createElement("p");
  // p.innerText = ` IMDB Ratings 8k `;
  // if (arr.imdRating > 7) {
  //   console.log("yes");
  // }

  let releasedate = document.createElement("p");

  releasedate.innerText = ` Relesae Date:${arr.Released} `;

  let writer = document.createElement("p");
  writer.innerText = ` writer:${arr.Writer} `;

  let actors = document.createElement("p");
  actors.innerText = ` Actors:${arr.Actors} `;

  if (arr.imdbRating > 8) {
    var recom = document.createElement("h3");
    recom.innerText = `RECOMMENDED  `;
    recom.style.color = "red";
    console.log("yes");
  }
  if (arr.imdbRating < 8) {
    var recom = document.createElement("h3");
    recom.innerText = "";
    recom.style.color = "red";
    console.log("yes");
  }

  if (arr.Title == undefined) {
    var err = document.createElement("img");
    err.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpg7R4SVnAJ_J1DIUowS9thvjhd-JB8T8d_w&usqp=CAU";
    moviesDataDiv.append(err);
    releasedate.innerText = "";
    writer.innerText = "";
    actors.innerText = "";
    imdb.innerText = "";
    movieName = "";
    img.src = "";
    recom.innerText = "";
  }
  // if (arr.Title !== undefined) {

  // }

  posterdiv.append(img);
  datadiv.append(movieName, imdb, releasedate, writer, recom);

  moviesDataDiv.append(posterdiv, datadiv);
  // });
}

// function error(arr) {
//   moviesDataDiv.innerHTML = null;

//   moviesDataDiv.append(err);
// }
