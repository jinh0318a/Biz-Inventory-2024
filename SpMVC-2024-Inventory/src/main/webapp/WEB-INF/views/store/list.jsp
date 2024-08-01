<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="store list">
	<article class="list">
		<c:forEach items="${STORELIST }" var="one">
			<div class="store" data-s_code="${one.s_code }">
				<span class="name">${one.s_name }</span>
			</div>
		</c:forEach>
	</article>
	<article class="info"></article>
</section>