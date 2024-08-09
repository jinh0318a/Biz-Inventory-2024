// 상품 수정
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section.goods.list");
  const management_form = section?.querySelector("form.update-all");
  const detail_form = section?.querySelector("article.detail form.detail");
  const btn_delete = document.querySelector("#deleteButton");
  const btn_update = document.querySelector("#updateButton");
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

  // 상품 재고 수정
  const onUpdate = async () => {
    const input_detail = detail_form
      .querySelector("div.info")
      .querySelector("div.count")
      .querySelector("input.g_count");
    if (!input_detail.value.trim()) {
      alert("값을 입력해주세요.");
      input_detail.focus();
      e.preventDefault();
      return false;
    }
  };

  // 상품 삭제
  const onDelete = async () => {
    const confirmation = confirm("정말로 삭제하시겠습니까?");
    if (!confirmation) {
      e.preventDefault();
      return false;
    }
  };

  management_form?.addEventListener("submit", onSubmit);
  detail_form?.addEventListener("submit", onSubmit);
  btn_delete?.addEventListener("click", onDelete);
  btn_update?.addEventListener("click", onUpdate);
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
