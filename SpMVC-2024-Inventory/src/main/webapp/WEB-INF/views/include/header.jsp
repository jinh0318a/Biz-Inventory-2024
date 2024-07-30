<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<header>
	<h1>로컬푸드 재고 확인 사이트</h1>
	<p>전북 완주군 로컬푸드</p>
</header>
<nav class="main">
	<ul>
		<li class="home"><a href="${rootPath }/">Home</a></li>
		<li class="store"><a href="${rootPath }/store/list">매장목록</a></li>
		<li class="goods"><a href="${rootPath }/goods/list">전체상품목록</a></li>
		<li class="board"><a href="${rootPath }/boards/list">상품문의</a></li>
		<c:choose>
			<c:when
				test="${not empty sessionScope.USER || not empty sessionScope.MANAGER}">
				<li class="logout"><a href="${rootPath }/logout">로그아웃</a></li>
			</c:when>
			<c:otherwise>
				<li class="login"><a href="${rootPath }/login">로그인</a></li>
			</c:otherwise>
		</c:choose>
		<c:choose>
			<c:when
				test="${not empty sessionScope.USER || not empty sessionScope.MANAGER}">
				<li class="mypage"><c:choose>
						<c:when test="${not empty sessionScope.USER }">
							<a href="${rootPath }/user/modify">정보수정</a>
						</c:when>
						<c:otherwise>
							<a href="${rootPath }/manager/modify">정보수정</a>
						</c:otherwise>
					</c:choose></li>
			</c:when>
			<c:otherwise>
				<li class="join"><a href="${rootPath }/join">회원가입</a></li>
			</c:otherwise>
		</c:choose>
	</ul>
</nav>