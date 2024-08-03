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

      saveBtn.addEventListener("click", () => {
        const updatedText = textArea.value;

        fetch("/comment/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `c_code=${commentId}&c_body=${encodeURIComponent(updatedText)}`,
        })
          .then((response) => response.text())
          .then((data) => {
            if (data === "success") {
              const newCommentText = document.createElement("span");
              newCommentText.className = "comment-text";
              newCommentText.textContent = updatedText;

              commentDiv.replaceChild(newCommentText, textArea);
              commentDiv.removeChild(saveBtn);
            } else {
              alert("댓글 수정에 실패했습니다.");
            }
          });
      });
    });
  });
});
