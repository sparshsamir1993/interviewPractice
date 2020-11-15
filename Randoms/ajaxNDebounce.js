let getJokes = () => {
  let jokesUrl = "https://api.chucknorris.io/jokes/random";
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log(this);
    if (this.response && this.status == 200) {
      console.log(this.response);
      let response = JSON.parse(this.response);
      document.querySelector("#norris").src = response.icon_url;
      document.querySelector(".changing-class h2").innerHTML = response.value;
    }
  };
  xhttp.open("GET", jokesUrl, true);
  xhttp.send();
};

let debounce = (fn, delay) => {
  setTimeout(() => {
    fn();
  }, delay);
};
