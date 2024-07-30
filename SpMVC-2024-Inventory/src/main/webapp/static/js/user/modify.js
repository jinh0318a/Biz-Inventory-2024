const INPUT_INDEX_USER_MODIFY = {
  u_password: 0,
  u_nick: 1,
  u_email: 2,
  button: 3,
};
const ERROR_MESSAGE_USER_MODIFY = [
  "* 비밀번호는 반드시 입력하세요",
  "* 닉네임은 반드시 입력하세요",
  "* 이메일은 반드시 입력하세요",
];

document.addEventListener("DOMContentLoaded", () => {
  const modify_form = document.querySelector("form.modify.user");

  const modify_inputs = modify_form?.querySelectorAll("input");
  const error_inputs = modify_form?.querySelectorAll("span");

  const emptyValid = (index) => {
    const text = modify_inputs[index].value;
    if (!text) {
      error_inputs[index].textContent = ERROR_MESSAGE_USER_MODIFY[index];
      error_inputs[index].style.display = "inline";
      modify_inputs[index].focus();
      return false;
    }
    return true;
  };

  const onmodifySubmit = (event) => {
    event.preventDefault();

    let yesValid = true;

    for (let i = 0; i < error_inputs.length; i++) {
      error_inputs[i].style.display = "none";
    }

    for (let i = 0; i < error_inputs.length; i++) {
      if (!(yesValid = emptyValid(i))) break;
    }

    if (yesValid) {
      modify_form.submit();
    }
  };

  modify_inputs[INPUT_INDEX_USER_MODIFY.button]?.addEventListener(
    "click",
    onmodifySubmit
  );
});
