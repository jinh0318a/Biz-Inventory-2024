<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="board input">
	<h1>글 작성</h1>
	<form method="post" class="board input">
		제목 <input type="text" name="b_title" /> 내용
		<textarea rows="" cols="" name="b_body"></textarea>
		<input type="submit" value="작성">
	</form>
</section>