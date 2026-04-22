// news.js
(function () {
  const newsBtn = document.getElementById("news-more-btn");
  const hiddenItems = document.querySelectorAll(".news__item.is-hidden");

  if (newsBtn) {
    newsBtn.addEventListener("click", () => {
      hiddenItems.forEach((item) => {
        item.classList.toggle("is-hidden");
      });
      newsBtn.textContent = (newsBtn.textContent === "もっと見る") ? "閉じる" : "もっと見る";
    });
  }
})();