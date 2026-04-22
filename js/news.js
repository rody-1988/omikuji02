(function () {
  // すべての「Read more...」ボタンを取得
  const moreBtns = document.querySelectorAll(".js-news-more");

  moreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1. クリックされたボタンの親要素（news__group）を探す
      const group = btn.closest(".news__group");
      
      // 2. そのグループ内にある 3件目以降のアイテムを取得
      const items = group.querySelectorAll(".news__item");
      
      items.forEach((item, index) => {
        if (index >= 2) {
          item.classList.toggle("is-hidden");
        }
      });

      // 3. ボタンのテキストを切り替え
      if (btn.textContent === "Read more...") {
        btn.textContent = "Close";
      } else {
        btn.textContent = "Read more...";
      }
    });
  });
})();