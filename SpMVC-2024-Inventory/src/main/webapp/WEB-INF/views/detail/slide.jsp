<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="main">
	<h1>추천 상품</h1>
	<div class="slider">
		<div class="slides">
			<c:forEach items="${GOODS }" var="one">
				<div class="slide" style="cursor: pointer;"
					onclick="location.href='${rootPath}/goods/list?g_name=${one.g_name }';">
					<div class="image">
						<img class="goods picture"
							src="${rootPath }/static/image/picture-2008484_1280.png"
							alt="상품사진" title="상품사진" />
					</div>
					<div class="description">
						<div class="name">상품명 ${one.g_name }</div>
						<div>가격 ${one.g_price }원</div>
						<div>재고 ${one.g_count }개</div>
					</div>
				</div>
			</c:forEach>
		</div>
	</div>
</section>
