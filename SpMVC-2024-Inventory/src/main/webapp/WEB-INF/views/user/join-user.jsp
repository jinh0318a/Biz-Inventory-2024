<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<section class="join user">
	<h1>일반회원 회원가입</h1>
	<form method="post" class="join user">
		<div>
			<label>아이디</label><input type="text" name="u_id" /><span>*</span>
		</div>
		<div>
			<label>비밀번호</label><input type="password" name="u_password" /><span>*</span>
		</div>
		<div>
			<label>닉네임</label><input type="text" name="u_nick" /><span>*</span>
		</div>
		<div>
			<label>이메일</label><input type="text" name="u_email" /><span>*</span>
		</div>
		<div>
			<input type="button" class="button" value="회원가입" />
		</div>
	</form>
</section>