const CLICK_INDEX_STORE = {
  둔산직매장: 0,
  모악직매장: 1,
  삼천직매장: 2,
  하가직매장: 3,
  효자직매장: 4,
};

const STORE_CODE = {
  S00001,
  S00002,
  S00003,
  S00004,
  S00005,
};

document.addEventListener("DOMContentLoaded", () => {
  const store_list = document.querySelector("section.store.list");
  const div_click = store_list.querySelectorAll("div.store");

  const onClickHandler = async () => {
    const response = await fetch(
      `${rootPath}/store/detail?s_code=${STORE_CODE}`
    );
    const html = await response.text();
    const subBox = document.querySelector("article.info");
    subBox.innerHTML = html;
  };

  div_click[CLICK_INDEX_STORE].addEventListener("click", onClickHandler);
});
