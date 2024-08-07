<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods insert">
	<div>
		<h1>상품 등록</h1>
		<p>매장코드는 관리자 매장코드</p>
		<p>상품코드는 자동으로 등록</p>
		<p>초기수량은 0으로 설정</p>
	</div>

	<form method="post" class="goods insert">
		<div>
			상품명<input type="text" name="g_name" />
		</div>
		<div>
			가격 <input type="text" name="g_price" />
		</div>
		<div>
			<button type="submit">상품등록</button>
		</div>
	</form>
</section>