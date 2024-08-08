document.addEventListener("DOMContentLoaded", () => {
  const board_table = document.querySelector("table.board.list");

  const board_data = board_table?.querySelector("tbody");

  const onDataClickHandler = (e) => {
    const target = e.target;
    if (target.tagName === "TD") {
      const tr = target.closest("TR");
      const b_code = tr.dataset.b_code;
      document.location.href = `${rootPath}/board/detail?b_code=${b_code}`;
    }
  };

  board_data?.addEventListener("click", onDataClickHandler);
});

document.addEventListener("DOMContentLoaded", () => {
  const input_form = document.querySelector("section.board.input");
  const btn_save = input_form?.querySelector("input.btn-save");
  const onSaveBoard = (event) => {
    const input_title = input_form?.querySelector("input.board.title");
    const input_body = input_form?.querySelector("textarea.board.body");

    if (!input_title.value) {
      alert("제목을 입력하세요");
      input_title.select();
      event.preventDefault();
      return false;
    }

    if (!input_body.value) {
      alert("내용을 입력하세요");
      input_body.select();
      event.preventDefault();
      return false;
    }
  };

  btn_save?.addEventListener("click", onSaveBoard);
});

document.addEventListener("DOMContentLoaded", () => {
  const input_form = document.querySelector("section.board.update");
  const btn_save = input_form?.querySelector("input.btn-save");
  const onSaveBoard = (event) => {
    const input_title = input_form?.querySelector("input.board.title");
    const input_body = input_form?.querySelector("textarea.board.body");

    if (!input_title.value) {
      alert("제목을 입력하세요");
      input_title.select();
      event.preventDefault();
      return false;
    }

    if (!input_body.value) {
      alert("내용을 입력하세요");
      input_body.select();
      event.preventDefault();
      return false;
    }
  };

  btn_save?.addEventListener("click", onSaveBoard);
});

document.addEventListener("DOMContentLoaded", () => {
  const board_detail = document.querySelector("section.board.detail");
  const btn_delete = board_detail?.querySelector("input.board.delete");

  const onDelete = async (e) => {
    const b_code = e.target.closest("DIV").dataset.b_code;
    if (!confirm("게시글을 삭제하시겠습니까?")) return;
    const res = await fetch(`${rootPath}/board/delete?b_code=${b_code}`);

    if (res.status !== 200) {
      alert("삭제 할 수 없습니다.");
      return false;
    }
    const html = await res.text();
    window.location.href = `${rootPath}/board/list`;
    alert("삭제를 완료했습니다.");
  };

  btn_delete?.addEventListener("click", onDelete);
});
