<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set value="${pageContext.request.contextPath }" var="rootPath" />
<section class="goods list">
	<div>
		<h2>전체 상품 목록</h2>
	</div>
	<table>
		<thead>
			<tr>
				<th>상품명</th>
				<th>가격</th>
				<th>재고</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${GOODS }" var="one">
				<tr data-g_code="${one.g_code }">
					<td>${one.g_name }</td>
					<td>${one.g_price }</td>
					<td>${one.g_count }</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</section>