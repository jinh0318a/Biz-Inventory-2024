document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section.goods.list");
  const management_form = section.querySelector("form.update-all");
  const detail_form = section.querySelector("article.detail form.detail");

  const onSubmit = (e) => {
    const input_all = management_form.querySelectorAll("input.g_count");
    for (let input of input_all) {
      if (!input.value.trim()) {
        alert("모든 재고 수량을 입력해주세요.");
        input.focus();
        e.preventDefault();
        return false;
      }
    }

    const input_detail = detail_form.querySelector("div.count input.g_count");
    if (!input_detail.value.trim()) {
      alert("값을 입력해주세요.");
      input_detail.focus();
      e.preventDefault();
      return false;
    }
  };

  management_form.addEventListener("submit", onSubmit);
  detail_form.addEventListener("submit", onSubmit);
});
