import { displayNews } from "./displayNews.js";

const searchBar = document.getElementById("search-bar");

let news = [];

// Find news function
searchBar.addEventListener("keyup", (e) => {
  const searchNews = e.target.value.toLowerCase();

  const filteredNews = news.filter((n) => {
    return n.title.toLowerCase().includes(searchNews);

    // Tadinya saya mau pake search by title atau by cnotent, tapi kenapa gabisa ya? Mohon bantuannya mas.
    // return n.title.toLowerCase().includes(searchNews) || n.content.toLowerCase().includes(searchNews);
  });
  console.log(searchNews);
  displayNews(filteredNews);
});

// Fetch data from API
const getData = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=d09d1ba2a8984ab6a7065777183d7a08"
    );
    news = response.data.articles;
    displayNews(news);
  } catch (error) {
    console.log(error.message);
  }
};

getData();
