document.addEventListener("DOMContentLoaded", () => {
  const board_detail = document.querySelector("section.board.detail");
  const btn_delete = board_detail.querySelector("input.board.delete");

  const onDelete = async (e) => {
    const b_code = e.target.closest("DIV").dataset.b_code;
    if (!confirm("메모를 삭제할까요?")) return;
    const res = await fetch(`${rootPath}/board/delete?b_code=${b_code}`);

    if (res.status !== 200) {
      alert("삭제 할 수 없습니다.");
      return false;
    }
    const html = await res.text();
    board_detail.innerHTML = html;
    alert("삭제를 완료했습니다.");
  };

  btn_delete.addEventListener("click", onDelete);
});
