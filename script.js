const url = "https://games-details.p.rapidapi.com/page/1";
const apiKey = "865b551d48msh1f0e39c31e0c5dap14d49fjsn09b433be9641";
let container = document.querySelector(".container");

async function fetchData() {
  try {
    let response = await fetch(url, {
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "games-details.p.rapidapi.com",
      },
    });

    let data = await response.json();
    let gameData = data.data.pages;

    gameData.map((item) => {
      let gameContainer = document.createElement("div");
      gameContainer.className = "game-container";
      //   console.log(item);

      gameContainer.innerHTML = `
      <div class="image">
            <img
              src=${item.img}
              alt="game-name"
            />
          </div>
          <p>👾${item.name}</p>
          <hr />
          <div class="info">
            <div class="price">
              <span>💰Price</span>
              <p>${item.price}</p>
            </div>

            <div class="release-date">
              <span>📆Release Date</span>
              <p>${item.release_date}</p>
            </div>
          </div>
      `;
      container.append(gameContainer);
      gameContainer.addEventListener("click", () => alert(item.id));
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();
