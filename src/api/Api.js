import CONSTANTS from "../helpers/Constants";

export const fetchAllNewsData = () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=39616148bb09491194749fd75e79b36f";
  var req = new Request(url);
  return fetch(req).then(function (response) {
    return response.json();
  });
};

export const fetchNewsDataByInput = (userInput) => {
  let today = new Date().toJSON().split('T')[0];
  var url = 'http://newsapi.org/v2/everything?' +
    'q='+userInput+'&' +
    'from='+today+'&' +
    'sortBy=popularity&' +
    'apiKey=39616148bb09491194749fd75e79b36f';

  var req = new Request(url);

  return fetch(req)
    .then(function (response) {
      return response.json();
    })
};
