<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<section class="join manager">
	<h1>매장관리자 회원가입</h1>
	<form method="post" class="join manager">
		<div>
			<label>아이디</label><input type="text" name="m_id" /><span>*</span>
		</div>
		<div>
			<label>비밀번호</label><input type="password" name="m_password" /><span>*</span>
		</div>
		<div>
			<label>이메일</label><input type="text" name="m_email" /><span>*</span>
		</div>
		<div>
			<label>매장코드</label><input type="text" name="m_storecode" /><span>*</span>
		</div>
		<div>
			<input type="button" class="button" value="회원가입" />
		</div>
	</form>
</section>