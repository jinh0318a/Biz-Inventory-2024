<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section>
	<form method="post">
		제목 <input type="text" name="b_title" /> 내용
		<textarea rows="" cols="" name="b_body"></textarea>
		<input type="submit" value="작성">
	</form>
</section>