document.addEventListener("DOMContentLoaded", () => {
  const boardDetail = document.querySelector("section.board.detail");
  const commentForm = boardDetail.querySelector("div.comment form.comment");
  const commentDiv = commentForm.querySelector("div.comment-input");
  const btnComment = commentDiv.querySelector("input.comment.save");

  const onSaveComment = (event) => {
    const inputComment = commentDiv.querySelector("textarea.comment.body");
    if (!inputComment.value) {
      alert("댓글을 입력하세요");
      inputComment.select();
      event.preventDefault();
      return false;
    }
  };

  btnComment.addEventListener("click", onSaveComment);

  const onDeleteComment = async (e) => {
    const btnDelete = e.target.closest("button.btn-delete");
    if (!btnDelete) return;

    const cCode = btnDelete.dataset.c_code;
    const bCode = btnDelete.dataset.b_code;

    if (!confirm("댓글을 삭제할까요?")) return;

    const res = await fetch(`${rootPath}/comment/delete?c_code=${cCode}`);

    if (res.status !== 200) {
      alert("삭제 할 수 없습니다.");
      return false;
    }
    window.location.href = `${rootPath}/board/detail?b_code=${bCode}`;
    alert("삭제를 완료했습니다.");
  };

  boardDetail.addEventListener("click", (e) => {
    if (e.target.matches("button.btn-delete")) {
      onDeleteComment(e);
    }
  });

  const onUpdateClick = (e) => {
    const btnUpdate = e.target.closest("button.btn-update");
    if (!btnUpdate) return;
    const commentDiv = btnUpdate.closest("div.writer");
    const commentBody = commentDiv.querySelector("span.comment-text");

    const form = document.createElement("form");
    form.classList.add("update-form");
    form.action = `${rootPath}/comment/update`;
    form.method = "POST";

    const input_c_code = document.createElement("input");
    input_c_code.type = "hidden";
    input_c_code.name = "c_code";
    input_c_code.value = btnUpdate.dataset.c_code;
    form.appendChild(input_c_code);

    const input_b_code = document.createElement("input");
    input_b_code.type = "hidden";
    input_b_code.name = "c_boardcode";
    input_b_code.value = btnUpdate.dataset.b_code;
    form.appendChild(input_b_code);

    const textArea = document.createElement("textarea");
    textArea.name = "c_body";
    textArea.value = commentBody.textContent;
    form.appendChild(textArea);

    const btnSave = document.createElement("button");
    btnSave.textContent = "저장";
    btnSave.type = "submit";
    form.appendChild(btnSave);

    commentDiv.replaceChild(form, commentBody);

    const divButton = btnUpdate.closest("div.button");
    divButton.removeChild(btnUpdate);

    const onUpdateComment = (e) => {
      e.preventDefault();
      const commentId = btnUpdate.dataset.c_code;
      const boardId = btnUpdate.dataset.b_code;

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
          c_boardcode: boardId,
          c_body: updatedComment,
        }),
      };

      fetch(`${rootPath}/comment/update`, fetchConfig)
        .then((res) => {
          if (res.status === 200) {
            alert("수정 완료");
          } else {
            alert("수정 실패");
          }
          return res.text();
        })
        .then(() => {
          commentBody.textContent = updatedComment;
          commentDiv.replaceChild(commentBody, form);

          divButton.appendChild(btnUpdate);

          window.location.href = `${rootPath}/board/detail?b_code=${boardId}`;
        });
    };

    form.addEventListener("submit", onUpdateComment);
  };

  boardDetail.addEventListener("click", (e) => {
    if (e.target.matches("button.btn-update")) {
      onUpdateClick(e);
    }
  });
});
