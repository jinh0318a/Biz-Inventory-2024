<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="board update">
	<h1>글 수정</h1>
	<form method="post" class="board update">
		제목 <input type="text" name="b_title" value="${BOARD.b_title }" /> 내용
		<textarea rows="" cols="" name="b_body">${BOARD.b_body }</textarea>
		<input type="submit" value="수정">
	</form>
</section>