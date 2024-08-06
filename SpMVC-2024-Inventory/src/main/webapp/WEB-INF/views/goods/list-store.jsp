<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods list">
	<div>
		<h2>
			<span class="store">${STORE }</span> 상품 목록
		</h2>
	</div>
	<form class="search" action="${rootPath }/goods/search">
		<select name="store">
			<option value="0">매장 선택</option>
			<option value="1">둔산 직매장</option>
			<option value="2">모악 직매장</option>
			<option value="3">삼천 직매장</option>
			<option value="4">하가 직매장</option>
			<option value="5">효자 직매장</option>
		</select> <input type="text" class="search" name="word"
			placeholder="검색하실 상품을 입력하세요" /> <input type="submit" class="button"
			value="상품검색" />
	</form>
	<div class="list">
		<table class="goods list">
			<thead>
				<tr>
					<th>판매매장</th>
					<th>상품명</th>
					<th>가격</th>
					<th>재고</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${GOODS }" var="one">
					<tr data-g_code="${one.g_code }">
						<td>${one.g_storename }</td>
						<td>${one.g_name }</td>
						<td>${one.g_price }</td>
						<td>${one.g_count }</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<article class="detail"></article>
	</div>
</section>