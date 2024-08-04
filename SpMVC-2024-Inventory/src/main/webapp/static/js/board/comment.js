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
