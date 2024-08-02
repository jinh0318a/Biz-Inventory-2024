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
