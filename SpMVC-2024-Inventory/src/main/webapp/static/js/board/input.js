document.addEventListener("DOMContentLoaded", () => {
  const input_form = document.querySelector("section.board.input");
  const btn_save = input_form.querySelector("input.btn-save");
  const onSaveBoard = (event) => {
    const input_title = input_form.querySelector("input.board.title");
    const input_body = input_form.querySelector("textarea.board.body");

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

  btn_save.addEventListener("click", onSaveBoard);
});

document.addEventListener("DOMContentLoaded", () => {
  const input_form = document.querySelector("section.board.update");
  const btn_save = input_form.querySelector("input.btn-save");
  const onSaveBoard = (event) => {
    const input_title = input_form.querySelector("input.board.title");
    const input_body = input_form.querySelector("textarea.board.body");

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

  btn_save.addEventListener("click", onSaveBoard);
});
