<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section>
	<div class="slider">
		<div class="slides">
			<div class="slide">슬라이드 1</div>
			<div class="slide">슬라이드 2</div>
			<div class="slide">슬라이드 3</div>
		</div>
	</div>
	<div class="navigation">
		<button class="prev">이전</button>
		<button class="next">다음</button>
	</div>
</section>
