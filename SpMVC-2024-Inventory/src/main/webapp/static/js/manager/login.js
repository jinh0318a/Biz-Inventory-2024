const INPUT_INDEX_MANAGER_LOGIN = {
  u_id: 0,
  u_password: 1,
  button: 2,
};
const ERROR_MESSAGE_MANAGER_LOGIN = [
  "* ID 는 반드시 입력하세요",
  "* 비밀번호는 반드시 입력하세요",
];

document.addEventListener("DOMContentLoaded", () => {
  const login_form = document.querySelector("form.login.manager");

  const login_inputs = login_form?.querySelectorAll("input");
  const error_inputs = login_form?.querySelectorAll("span");

  const emptyValid = (index) => {
    const text = login_inputs[index].value;
    if (!text) {
      error_inputs[index].textContent = ERROR_MESSAGE_MANAGER_LOGIN[index];
      error_inputs[index].style.display = "inline";
      login_inputs[index].focus();
      return false;
    }
    return true;
  };

  const onloginSubmit = (event) => {
    event.preventDefault();

    let yesValid = true;

    for (let i = 0; i < error_inputs.length; i++) {
      error_inputs[i].style.display = "none";
    }

    for (let i = 0; i < error_inputs.length; i++) {
      if (!(yesValid = emptyValid(i))) break;
    }

    if (yesValid) {
      login_form.submit();
    }
  };

  login_inputs[INPUT_INDEX_MANAGER_LOGIN.button]?.addEventListener(
    "click",
    onloginSubmit
  );
});
