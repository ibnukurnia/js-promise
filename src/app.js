const cards = document.getElementById("card-container");
const searchBar = document.getElementById("search-bar");

let news = [];

searchBar.addEventListener("keyup", (e) => {
  const searchNews = e.target.value.toLowerCase();

  const filteredNews = news.filter((n) => {
    return n.title.toLowerCase().includes(searchNews);
  });
  console.log(searchNews);
  displayNews(filteredNews);
});

const getData = async () => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=d22612e9ee684aa3807ab9068737748a"
    );
    news = response.data.articles;
    displayNews(news);
  } catch (error) {
    console.log(error.message);
  }
};

const displayNews = (news) => {
  const card = news
    .map((n) => {
      return `
        <div class="col-12 mb-3">
        <div class="card d-flex flex-sm-row">
          <img src="${n.urlToImage}" class="card-img-top img-fluid" alt="..."  />
          <div class="card-body">
            <h5 class="card-title">${n.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${
              `${n.author}` !== "null" ? `${n.author}` : "Anonim"
            } - ${new Date(`${n.publishedAt}`).toLocaleString("id-ID")}</h6>
            <p class="card-text">${
              `${n.content}` !== "null" ? `${`${n.content}`.slice(0, 100)} ... ` : "No content"
            }</p>
            <a href="${n.url}" class="btn btn-primary">Read More...</a>
          </div>
        </div>
        </div>
    `;
    })
    .join("");
  cards.innerHTML = card;
};

getData();
