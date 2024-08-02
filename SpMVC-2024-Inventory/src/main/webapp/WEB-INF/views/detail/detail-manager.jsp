<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<div>
	<form method="POST" action="${rootPath }/goods/update-detail">
		<input type="hidden" name="g_code" value="${GOOD.g_code }" /> <img
			class="goods picture" src="" alt="상품사진" title="상품사진" />
		<div class="name">상품명 ${GOOD.g_name }</div>
		<div>가격 ${GOOD.g_price }원</div>
		<div>
			수량 <input name="g_count" type="number" value="${GOOD.g_count }" />개
		</div>
		<div>
			<button type="submit">재고 수정</button>
		</div>
	</form>
</div>