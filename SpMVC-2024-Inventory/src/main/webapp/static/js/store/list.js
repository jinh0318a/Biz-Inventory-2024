document.addEventListener("DOMContentLoaded", () => {
  const store_list = document.querySelector("section.store.list");

  const select_store = store_list.querySelector("span.name");
  let s_code;

  const onClickHandler = async () => {
    const response = await fetch(`${rootPath}/store/detail?s_code=${s_code}`);
    const html = await response.text();
    const subBox = document.querySelector("article.info");
    subBox.innerHTML = html;
  };

  store_list.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "SPAN") {
      const div = target.closest("DIV");
      s_code = div.dataset.s_code;
      onClickHandler();
    }
  });
});
