<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<section class="modify user">
	<h1>회원 정보 수정</h1>
	<form method="post" class="modify user">
		<div>
			<label>아이디</label>${USER.u_id }
		</div>
		<div>
			<label>비밀번호</label><input type="password" name="u_password"
				value="${USER.u_password }" /><span>*</span>
		</div>
		<div>
			<label>닉네임</label><input type="text" name="u_nick"
				value="${USER.u_nick }" /><span>*</span>
		</div>
		<div>
			<label>이메일</label><input type="text" name="u_email"
				value="${USER.u_email }" /><span>*</span>
		</div>
		<div>
			<input type="button" class="button" value="정보수정" />
		</div>
	</form>
</section>