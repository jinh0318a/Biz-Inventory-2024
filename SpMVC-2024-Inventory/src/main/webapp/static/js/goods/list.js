document.addEventListener("DOMContentLoaded", () => {
  const goods_list = section.querySelector("table.goods.list");

  goods_list.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const g_code = tr.dataset.g_code;

      alert(g_code);
    }
  });
});
