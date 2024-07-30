<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="login main">
	<h1>로그인</h1>
	<div>
		<a href="${rootPath }/user/login-user">일반회원 로그인</a>
	</div>
	<div>
		<a href="${rootPath }/manager/login-manager">매장관리자 로그인</a>
	</div>
</section>