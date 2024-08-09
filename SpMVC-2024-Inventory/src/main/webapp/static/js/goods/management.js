// 상품 수정
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section.goods.list");
  const management_form = section?.querySelector("form.update-all");
  const detail_form = section?.querySelector("article.detail form.detail");

  const onSubmit = (e) => {
    // 상품 전체 재고 수정
    const input_all = management_form?.querySelectorAll("input.g_count");
    for (let input of input_all) {
      if (!input.value.trim()) {
        alert("모든 재고 수량을 입력해주세요.");
        input.focus();
        e.preventDefault();
        return false;
      }
    }
  };

  management_form?.addEventListener("submit", onSubmit);
  detail_form?.addEventListener("submit", onSubmit);
});

// 상품 등록
document.addEventListener("DOMContentLoaded", () => {
  const insert_section = document.querySelector("section.goods.insert");
  const insert_form = insert_section?.querySelector("form.goods.insert");
  const btn_insert = insert_form?.querySelector("button.insert");

  const onInsertHandler = (e) => {
    const input_g_name = insert_form?.querySelector("input.g_name");
    const input_g_price = insert_form?.querySelector("input.g_price");

    if (!input_g_name.value) {
      alert("상품명을 입력해주세요");
      input_g_name.select();
      e.preventDefault();
      return false;
    }

    if (!input_g_price.value) {
      alert("가격을 입력해주세요");
      input_g_price.select();
      e.preventDefault();
      return false;
    }

    if (isNaN(input_g_price.value) || input_g_price.value <= 0) {
      alert("가격은 0이상 숫자만 입력해주세요");
      input_g_price.select();
      e.preventDefault();
      return false;
    }

    return true;
  };

  btn_insert?.addEventListener("click", onInsertHandler);
});
