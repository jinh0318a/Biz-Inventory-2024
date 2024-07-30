<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="join main">
	<h1>회원가입</h1>
	<div>
		<a href="${rootPath }/user/join-user">일반회원 회원가입</a>
	</div>
	<div>
		<a href="${rootPath }/manager/join-manager">매장관리자 회원가입</a>
	</div>
</section>