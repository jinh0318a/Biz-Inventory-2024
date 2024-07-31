<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<section class="modify manager">
	<h1>회원 정보 수정</h1>
	<form method="post" class="modify manager">
		<div>
			<label>아이디</label>${MANAGER.m_id }
		</div>
		<div>
			<label>비밀번호</label> <input type="password" name="m_password"
				value="${MANAGER.m_password }" /> <span>*</span>
		</div>
		<div>
			<label>이메일</label> <input type="text" name="m_email"
				value="${MANAGER.m_email }" /> <span>*</span>
		</div>
		<div>
			<label>매장코드</label> <input type="text" name="m_storecode"
				value="${MANAGER.m_storecode }" /> <span>*</span>
		</div>
		<div>
			<input type="button" class="button" value="정보수정" />
		</div>
	</form>
</section>