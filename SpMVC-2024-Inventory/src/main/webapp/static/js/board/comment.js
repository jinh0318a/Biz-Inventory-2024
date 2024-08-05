document.addEventListener("DOMContentLoaded", () => {
  const board_detail = document.querySelector("section.board.detail");
  const comment_form = board_detail
    .querySelector("div.comment")
    .querySelector("form.comment");
  const comment_div = comment_form.querySelector("div.comment-input");
  const btn_comment = comment_div.querySelector("input.comment.save");

  const onSaveComment = (event) => {
    const input_comment = comment_div.querySelector("textarea.comment.body");
    if (!input_comment.value) {
      alert("댓글을 입력하세요");
      input_comment.select();
      event.preventDefault();
      return false;
    }
  };

  btn_comment.addEventListener("click", onSaveComment);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".edit-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const commentId = button.getAttribute("data-code");
      const commentDiv = document.getElementById(`comment-${commentId}`);
      const commentText = commentDiv.querySelector(".comment-text");

      const currentText = commentText.textContent;
      const textArea = document.createElement("textarea");
      textArea.value = currentText;
      commentDiv.replaceChild(textArea, commentText);

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "저장";
      commentDiv.appendChild(saveBtn);
    });
  });
});
