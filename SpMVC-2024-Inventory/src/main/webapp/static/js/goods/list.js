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
      applyEventHandlers();
    }
  };
  goods_list?.addEventListener("click", onClickHandelr);

  const applyEventHandlers = () => {
    const section = document.querySelector("section.goods.list");
    const management_form = section?.querySelector("form.update-all");
    const detail_form = section?.querySelector("article.detail form.detail");
    const btn_delete = document.querySelector("#deleteButton");
    const btn_update = document.querySelector("#updateButton");

    const onSubmit = (e) => {
      e.preventDefault();

      if (detail_form) {
        const input_detail = detail_form
          .querySelector("div.info")
          .querySelector("div.count")
          .querySelector("input.g_count");
        if (!input_detail.value.trim()) {
          alert("값을 입력해주세요.");
          input_detail.focus();
          return false;
        }
      }
    };

    const onUpdate = (e) => {
      e.preventDefault();

      if (detail_form) {
        const input_detail = detail_form
          .querySelector("div.info")
          .querySelector("div.count")
          .querySelector("input.g_count");
        if (!input_detail.value.trim()) {
          alert("값을 입력해주세요.");
          input_detail.focus();
          return false;
        }
      }
    };

    const onDelete = (e) => {
      e.preventDefault();

      const confirmation = confirm("정말로 삭제하시겠습니까?");
      if (!confirmation) {
        return false;
      }
    };

    management_form?.addEventListener("submit", onSubmit);
    detail_form?.addEventListener("submit", onUpdate);
    btn_delete?.addEventListener("click", onDelete);
    btn_update?.addEventListener("click", onUpdate);
  };
});
