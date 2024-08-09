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
  goods_list?.addEventListener("click", onClickHandelr);
});

document.addEventListener("DOMContentLoaded", () => {
  // 비동기로 콘텐츠를 로드하는 함수
  const loadContent = async () => {
    try {
      const response = await fetch("content.html"); // 비동기 요청
      const html = await response.text();
      document.getElementById("content").innerHTML = html;

      // 콘텐츠 로드 후 자바스크립트 코드를 적용
      applyEventHandlers();
    } catch (error) {
      console.error("Error loading content:", error);
    }
  };

  // 이벤트 핸들러 적용 함수
  const applyEventHandlers = () => {
    const section = document.querySelector("section.goods.list");
    const management_form = section?.querySelector("form.update-all");
    const detail_form = section?.querySelector("article.detail form.detail");
    const btn_delete = document.querySelector("#deleteButton");
    const btn_update = document.querySelector("#updateButton");

    const onSubmit = (e) => {
      e.preventDefault(); // 폼 제출 방지

      if (management_form) {
        const input_all = management_form.querySelectorAll("input.g_count");
        for (let input of input_all) {
          if (!input.value.trim()) {
            alert("모든 재고 수량을 입력해주세요.");
            input.focus();
            return false;
          }
        }
      }

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

    const onUpdate = async (e) => {
      e.preventDefault(); // 기본 동작 방지

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

    const onDelete = async (e) => {
      e.preventDefault(); // 기본 동작 방지

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

  // 콘텐츠 로드 버튼 클릭 시 loadContent 호출
  document.getElementById("loadContent").addEventListener("click", loadContent);
});
