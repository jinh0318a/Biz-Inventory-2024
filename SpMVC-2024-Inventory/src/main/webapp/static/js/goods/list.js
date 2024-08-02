document.addEventListener("DOMContentLoaded", () => {
  const goods_list = document.querySelector("table.goods.list");
  const detail_box = document.querySelector("article.detail");
  const onClickHandelr = async (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const g_code = tr.dataset.g_code;

      const res = await fetch(`${rootPath}/goods/detail?g_code=${g_code}`);
      const html = await res.text();
      detail_box.innerHTML = html;
    }
  };
  goods_list.addEventListener("click", onClickHandelr);
});
