const INPUT_INDEX_MANAGER = {
  m_id: 0,
  m_password: 1,
  m_emial: 2,
  m_storecode: 3,
  button: 4,
};
const ERROR_MESSAGE_MANAGER = [
  "* ID 는 반드시 입력하세요",
  "* 비밀번호는 반드시 입력하세요",
  "* 닉네임은 반드시 입력하세요",
  "* 매장코드는 반드시 입력하세요",
];

document.addEventListener("DOMContentLoaded", () => {
  const join_form = document.querySelector("form.join.manager");

  const join_inputs = join_form.querySelectorAll("input");
  const error_inputs = join_form.querySelectorAll("span");

  const emptyValid = (index) => {
    const text = join_inputs[index].value;
    if (!text) {
      error_inputs[index].textContent = ERROR_MESSAGE_MANAGER[index];
      error_inputs[index].style.display = "inline";
      join_inputs[index].focus();
      return false;
    }
    return true;
  };

  const onJoinSubmit = (event) => {
    event.preventDefault();

    let yesValid = true;

    for (let i = 0; i < error_inputs.length; i++) {
      error_inputs[i].style.display = "none";
    }

    for (let i = 0; i < error_inputs.length; i++) {
      if (!(yesValid = emptyValid(i))) break;
    }

    if (yesValid) {
      join_form.submit();
    }
  };

  join_inputs[INPUT_INDEX_MANAGER.button].addEventListener(
    "click",
    onJoinSubmit
  );
});
