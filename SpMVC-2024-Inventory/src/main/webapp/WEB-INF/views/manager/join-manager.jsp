<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<section class="join manager">
	<h1>매장관리자 회원가입</h1>
	<form method="post" class="join manager">
		<div>
			<label>아이디</label><input type="text" name="m_id" />
		</div>
		<div>
			<label>비밀번호</label><input type="password" name="m_password" />
		</div>
		<div>
			<label>이메일</label><input type="text" name="m_email" />
		</div>
		<div>
			<label>매장코드</label><input type="text" name="m_storecode" />
		</div>
		<div>
			<button type="submit">회원가입</button>
		</div>
	</form>
</section>