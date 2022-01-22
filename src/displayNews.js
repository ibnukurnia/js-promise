// Displaying data to page

const cards = document.getElementById("card-container");
export const displayNews = (news) => {
  const card = news
    .map((n) => {
      return `
          <div class="col-12 mb-3">
          <div class="card d-flex flex-md-row">
            <img src="${n.urlToImage}" class="card-img-top img-fluid" alt="..."  />
            <div class="card-body px-md-5">
              <h5 class="card-title">${n.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${
                `${n.author}` !== "null" ? `${n.author}` : "Anonim"
              } - ${new Date(`${n.publishedAt}`).toLocaleString("id-ID")}</h6>
              <p class="card-text mt-3">${
                `${n.content}` !== "null" ? `${`${n.content}`.slice(0, 200)} ... ` : "No content"
              }</p>
              <a href="${n.url}" class="btn btn-primary mt-5">Read More...</a>
            </div>
          </div>
          </div>
      `;
    })
    .join("");

  cards.innerHTML = card;
};
