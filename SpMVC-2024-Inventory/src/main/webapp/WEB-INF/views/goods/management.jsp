<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods list">
	<div>
		<h2>매장 상품 관리 (${STORE.s_name})</h2>
	</div>
	<form class="search" action="${rootPath }/goods/search-manager">
		<input type="text" class="search" name="word"
			placeholder="검색하실 상품을 입력하세요" /> <input type="submit" class="button"
			value="상품검색" />
	</form>
	<div class="list">
		<form method="POST" action="${rootPath }/goods/update-all"
			class="goods update-all">
			<table class="goods list">
				<thead>
					<tr>
						<th>상품코드</th>
						<th>상품명</th>
						<th>가격</th>
						<th>재고</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${GOODS }" var="one">
						<tr data-g_code="${one.g_code }">
							<td>${one.g_code }<input type="hidden" name="g_code"
								value="${one.g_code }" /></td>
							<td>${one.g_name }</td>
							<td>${one.g_price }</td>
							<td><input type="number" value="${one.g_count }"
								name="g_count" class="g_count" /></td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<div class="management">
				<button type="submit" class="button">전체 수정</button>
				<a href="${rootPath }/goods/insert"><input type="button"
					class="insert" value="상품등록" /></a>
			</div>
		</form>
		<article class="detail"></article>
	</div>
</section>