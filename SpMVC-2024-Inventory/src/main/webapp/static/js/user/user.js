const INPUT_INDEX_USER = {
  u_id: 0,
  u_password: 1,
  u_nick: 2,
  u_email: 3,
  button: 4,
};
const ERROR_MESSAGE_USER = [
  "* ID 는 반드시 입력하세요",
  "* 비밀번호는 반드시 입력하세요",
  "* 닉네임은 반드시 입력하세요",
  "* 이메일은 반드시 입력하세요",
];

document.addEventListener("DOMContentLoaded", () => {
  const join_form = document.querySelector("form.join.user");

  const join_inputs = join_form?.querySelectorAll("input");
  const error_inputs = join_form?.querySelectorAll("span");

  const emptyValid = (index) => {
    const text = join_inputs[index].value;
    if (!text) {
      error_inputs[index].textContent = ERROR_MESSAGE_USER[index];
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

  join_inputs[INPUT_INDEX_USER.button]?.addEventListener("click", onJoinSubmit);
});

const INPUT_INDEX_USER_LOGIN = {
  u_id: 0,
  u_password: 1,
  button: 2,
};
const ERROR_MESSAGE_USER_LOGIN = [
  "* ID 는 반드시 입력하세요",
  "* 비밀번호는 반드시 입력하세요",
];

document.addEventListener("DOMContentLoaded", () => {
  const login_form = document.querySelector("form.login.user");

  const login_inputs = login_form?.querySelectorAll("input");
  const error_inputs = login_form?.querySelectorAll("span");

  const emptyValid = (index) => {
    const text = login_inputs[index].value;
    if (!text) {
      error_inputs[index].textContent = ERROR_MESSAGE_USER_LOGIN[index];
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

  login_inputs[INPUT_INDEX_USER_LOGIN.button]?.addEventListener(
    "click",
    onloginSubmit
  );
});

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
  const btn_delete = document.querySelector("input.delete");

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

  const onDelete = (e) => {
    const confirmation = confirm("정말로 탈퇴하시겠습니까?");
    if (!confirmation) {
      e.preventDefault();
      return false;
    }
  };

  btn_delete.addEventListener("click", onDelete);
});
