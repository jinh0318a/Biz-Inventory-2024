<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<div class="detail">
	<div class="image">
		<img class="goods picture"
			src="${rootPath }/static/image/picture-2008484_1280.png" alt="상품사진"
			title="상품사진" />
	</div>
	<div class="description">
		<div class="name">상품명 ${GOOD.g_name }</div>
		<div>가격 ${GOOD.g_price }원</div>
		<div>재고 ${GOOD.g_count }개</div>
	</div>
</div>