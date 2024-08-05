document.addEventListener("DOMContentLoaded", () => {
  const board_detail = document.querySelector("section.board.detail");
  const comment_form = board_detail
    .querySelector("div.comment")
    .querySelector("form.comment");
  const comment_div = comment_form.querySelector("div.comment-input");
  const btn_comment = comment_div.querySelector("input.comment.save");
  const btn_delete = board_detail
    .querySelector("div.comment")
    .querySelector("div.writer")
    .querySelector("div.button")
    .querySelector("button.btn-delete");

  const onSaveComment = (event) => {
    const input_comment = comment_div.querySelector("textarea.comment.body");
    if (!input_comment.value) {
      alert("댓글을 입력하세요");
      input_comment.select();
      event.preventDefault();
      return false;
    }
  };

  const onDeleteComment = async (e) => {
    const c_code = e.target.closest("BUTTON").dataset.c_code;
    const b_code = e.target.closest("BUTTON").dataset.b_code;
    if (!confirm("댓글을 삭제할까요?")) return;
    const res = await fetch(`${rootPath}/comment/delete?c_code=${c_code}`);

    if (res.status !== 200) {
      alert("삭제 할 수 없습니다.");
      return false;
    }
    window.location.href = `${rootPath}/board/detail?b_code=${b_code}`;
    alert("삭제를 완료했습니다.");
  };

  btn_delete.addEventListener("click", onDeleteComment);
  btn_comment.addEventListener("click", onSaveComment);
});

document.addEventListener("DOMContentLoaded", () => {
  const detail = document.querySelector("section.board.detail");
  const comment_div = detail.querySelector("div.comment");
  const div_writer = comment_div.querySelector("div.writer");
  const div_button = div_writer.querySelector("div.button");
  const btn_update = div_button.querySelector("button.btn-update");

  const onUpdateClick = () => {
    const commentBody = div_writer.querySelector("span.comment-text");

    const textArea = document.createElement("textarea");
    textArea.value = commentBody.textContent;
    div_writer.replaceChild(textArea, commentBody);

    const btn_save = document.createElement("button");
    btn_save.textContent = "저장";
    div_button.removeChild(btn_update);
    div_button.appendChild(btn_save);

    const onUpdateComment = (e) => {
      e.preventDefault();
      const commentId = btn_update.dataset.c_code;
      const boardId = btn_update.dataset.b_code;

      const updatedComment = textArea.value.trim();

      if (updatedComment === "") {
        alert("댓글 내용을 입력해주세요.");
        return;
      }

      const fetchConfig = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          c_code: commentId,
          c_body: updatedComment,
        }),
      };

      fetch(`${rootPath}/comment/update`, fetchConfig)
        .then((response) => response.text())
        .then((html) => {
          if (html) {
            commentBody.textContent = updatedComment;
            div_writer.replaceChild(commentBody, textArea);

            div_button.removeChild(btn_save);
            div_button.appendChild(btn_update);

            window.location.href = `${rootPath}/board/detail?b_code=${boardId}`;
          } else {
            alert("댓글 수정에 실패했습니다. 다시 시도해주세요.");
          }
        });
    };

    btn_save.addEventListener("click", onUpdateComment);
  };

  btn_update.addEventListener("click", onUpdateClick);
});
