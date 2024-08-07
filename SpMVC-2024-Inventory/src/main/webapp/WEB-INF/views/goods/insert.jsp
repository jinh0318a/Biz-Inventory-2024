<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods insert">
	<div>
		<h1>상품 등록</h1>
		<h3>주의사항</h3>
		<p>상품코드는 자동으로 등록됩니다.</p>
		<p>초기수량은 0으로 설정됩니다.</p>
	</div>

	<form method="post" class="goods insert">
		<div>
			상품명<input type="text" name="g_name" class="g_name" />
		</div>
		<div>
			가격 <input type="number" name="g_price" class="g_price" />
		</div>
		<div>
			<button type="submit" class="insert">상품등록</button>
		</div>
	</form>
</section>